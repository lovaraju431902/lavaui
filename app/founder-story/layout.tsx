import type { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';

export const metadata: Metadata = baseMetadata({
  title: 'Why Lava UI Exists',
  description:
    'Read the founder story behind Lava UI, from repeated interface work to an open-source library of animation-ready React components and blocks.',
  canonicalUrl: 'https://ui.lavahq.in/founder-story',
});

export default function FounderStoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
