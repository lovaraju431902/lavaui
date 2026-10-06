import type { Metadata } from 'next';
import { createNoIndexMetadata } from '@/lib/metadata';

export const metadata: Metadata = createNoIndexMetadata({
  title: 'Lava UI Email Preferences',
  description: 'Use a private email link to unsubscribe from Lava UI newsletter messages.',
  path: '/unsubscribe',
});

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
