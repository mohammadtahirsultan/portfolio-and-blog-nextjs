import Footer from '../components/Footer'
import Header from '../components/Header'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ghareeb Star Blog - Next Js and Sanity',
  description: 'This is a Blog Website build with Next JS and Sanity.io',
}

// hello

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
