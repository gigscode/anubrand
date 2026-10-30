import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anuoluwapo | Accounting & Auditing Training',
  description: 'Practical accounting and auditing training with personalized learning pathways for beginners, working professionals, and experienced finance leaders.',
  openGraph: {
    title: 'Anuoluwapo | Accounting & Auditing Training',
    description: 'Build accounting confidence. Master practical auditing.',
    type: 'website',
  },
  icons: { icon: '/anutech.jpg', apple: '/anutech.jpg' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#10213A' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
