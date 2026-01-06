import Nav from './(components)/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticketing App',
  description: 'Application with Ticket flow on System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="grow overflow-y-auto bg-[#2b3441] text-[#f1f3f5]">
            {children}
          </div>
        </div>
      </body>
      
    </html>
  )
}
