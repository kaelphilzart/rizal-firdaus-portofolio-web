import type { Metadata } from 'next'
import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/section/footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Technophil Media",
  description:
    "Technophil Media",
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png"
    }
  ],
  robots: {
    index: true,
    follow: true
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className='min-h-screen overflow-y-auto overflow-x-hidden'>
        {children}
      <Footer/>
      <WhatsAppButton/>
      </body>
    </html>
  )
}
