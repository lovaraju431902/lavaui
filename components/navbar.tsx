'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { MobileNav } from '@/components/mobile-nav';
import { MainNav } from './main-nav';
import { CommandMenuTrigger } from './command-menu-trigger';
import { GithubStarButton } from './github-star-button';
import { SponsorButton } from './sponsor-button';
import { ThemeToggle } from './theme-toggle';
import { UserNav } from './user-nav';
import { Button } from './ui/button';
import type { Session } from 'next-auth';

export function SiteHeader({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="flex h-14 items-center gap-2 md:gap-4 rounded-full border border-border bg-background/80 px-4 md:px-6 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <MobileNav />
        <MainNav />

        <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <nav className="flex items-center gap-1.5 sm:gap-2">
            <CommandMenuTrigger />
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            {session ? (
              <UserNav session={session} />
            ) : (
              <Link href={`/sign-up?callbackUrl=${encodeURIComponent(pathname)}`}>
                <Button
                  size="sm"
                  className="h-8 px-3 sm:px-5 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-xs"
                >
                  <span className="sm:hidden">Sign up</span>
                  <span className="hidden sm:inline">Create Account</span>
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
