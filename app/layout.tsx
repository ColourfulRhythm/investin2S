import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
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
    <html lang="en" className={`${playfairDisplay.variable} ${crimsonText.variable}`}>
      <body>{children}</body>
    </html>
  )
}

