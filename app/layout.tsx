import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TechieventNavbar from './components/TechieventNavbar'
import TechieventFooter from './components/TechieventFooter'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'techievent.io',
  description: 'Your ❤️ place to discover tech events!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <TechieventNavbar />
        {children}
        {/* <TechieventFooter /> */}
      </body>
    </html>
  )
}
