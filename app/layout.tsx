import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zia Diamonds - Luxury Diamond Jewelry',
  description: 'Exquisite diamond jewelry crafted with perfection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
