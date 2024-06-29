import Footer from '@/components/footer/Footer'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Initial D | Wiki',
  description: '',
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
