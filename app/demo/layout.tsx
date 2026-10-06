import type { Metadata } from 'next';
import { createNoIndexMetadata } from '@/lib/metadata';

export const metadata: Metadata = createNoIndexMetadata({
  title: 'Lava UI Animation Demo',
  description: 'Internal animation preview used to test a Lava UI SVG path effect.',
  path: '/demo',
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
