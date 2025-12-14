import type { Metadata } from 'next'
import { Cormorant_Garamond, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
})

export const metadata: Metadata = {
  title: 'A Personal Invitation to Invest in 2 Seasons',
  description: 'Investment opportunity in 2 Seasons regenerative lifestyle development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  )
}

