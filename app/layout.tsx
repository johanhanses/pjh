import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johan Hanses',
  description: 'Web Developer and aspiring Data Visualization Developer',
  keywords: [
    'web development',
    'data visualization',
    'react',
    'nextjs',
    'tailwindcss',
    'typescript',
    'd3',
    'svelte',
    'sveltekit',
    'javascript',
    'css',
    'html',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="h-[calc(100vh-8rem)] flex flex-col justify-center items-center px-6">
          {children}
        </main>
      </body>
    </html>
  )
}
