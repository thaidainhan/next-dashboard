import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

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
