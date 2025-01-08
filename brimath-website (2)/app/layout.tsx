'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import AdminAccess from './components/admin-access'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow p-4 md:p-8"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
          <AdminAccess />
        </div>
      </body>
    </html>
  )
}

