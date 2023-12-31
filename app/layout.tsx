import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Headers/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <link href="https://db.onlinewebfonts.com/c/535f840c3f8648137acc62e170b62847?family=VTB+Group+Cond+Book" rel="stylesheet"></link>
        <Header/>
          
        {children}

        </body>
    </html>
  )
}
