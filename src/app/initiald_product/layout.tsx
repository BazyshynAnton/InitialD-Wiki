import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Initial D | Product',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section>{children}</section>
}