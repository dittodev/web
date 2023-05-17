import { BaseHead } from '@/components';
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
  title: 'cube bot',
  description: 'The cube bot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <BaseHead />
      </head>
      <body className={`${grotesk.className} flex flex-col h-screen justify-between`}>
        {/* main content */}
        <section className="mb-auto">
          {children}
        </section>
        {/* footer */}
        <footer>

        </footer>
      </body>
    </html>
  )
}
