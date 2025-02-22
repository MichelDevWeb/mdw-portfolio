import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full Stack Developer Portfolio showcasing my projects and skills',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    title: 'Your Name - Portfolio',
    description: 'Full Stack Developer Portfolio showcasing my projects and skills',
    siteName: 'Your Name Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Portfolio',
    description: 'Full Stack Developer Portfolio showcasing my projects and skills',
    creator: '@yourusername',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 