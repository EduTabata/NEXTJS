import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function from RootLayout({
  children,
}: {
  children: React.ReactNode;
} ) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main>
          <div>
            {/* Conteúdo cabeçalho */}
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
