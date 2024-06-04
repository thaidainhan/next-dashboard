import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme',
    default: 'Dashboard | Acme ',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-dashboard-xi-mauve.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const FONT_CSS = `${inter.className} antialiased`;

  return (
    <html lang="en">
      <body className={FONT_CSS}>{children}</body>
    </html>
  );
}
