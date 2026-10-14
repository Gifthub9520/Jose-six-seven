import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Estudo de Caso: ABC Calçados S.A. | Apresentação de Administração',
  description: 'Apresentação interativa e moderna de slides sobre o estudo de caso da Empresa ABC Calçados S.A. para a disciplina de Administração.',
  openGraph: {
    title: 'Estudo de Caso: ABC Calçados S.A. | Apresentação de Administração',
    description: 'Apresentação interativa e moderna de slides sobre o estudo de caso da Empresa ABC Calçados S.A. para a disciplina de Administração.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudo de Caso: ABC Calçados S.A. | Apresentação de Administração',
    description: 'Apresentação interativa e moderna de slides sobre o estudo de caso da Empresa ABC Calçados S.A. para a disciplina de Administração.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-slate-900 text-slate-900 selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
