import LeftSide from "@/app/(docs)/layout-parts/left-side/left-side";
import OnThisPage from "@/app/(docs)/layout-parts/on-this-page";
import DocsPager from "@/app/(docs)/layout-parts/docs-pager";
import SponsorCard from "@/components/sponsor-card";
import React from "react";

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-wrapper">
      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[256px_minmax(0,1fr)_210px]">
        {/* Left sidebar */}
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="no-scrollbar h-full overflow-auto py-6 pr-2 lg:py-8">
            <LeftSide />
          </div>
        </aside>

        {/* Main content card */}
        <div className="min-w-0 self-start pb-16 pt-8 lg:pt-10">
          <div
            data-docs-content
            className="w-full max-w-4xl mx-auto px-2 sm:px-6 lg:px-8"
          >
            {children}
          </div>
          <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 mt-12">
            <DocsPager />
          </div>
        </div>

        {/* Right "On This Page" */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 xl:block">
          <div className="no-scrollbar h-full overflow-auto py-6 lg:py-8">
            <OnThisPage />
            <SponsorCard className="mt-6" source="docs_sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
