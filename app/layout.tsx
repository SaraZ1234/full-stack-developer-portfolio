// import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Full-Stack Developer | Premium Web Solutions',
  description: 'Premium portfolio showcasing expert full-stack JavaScript development, Next.js, React, and modern web technologies. Transform your digital vision into reality.',
  keywords: 'Full-Stack Developer, Next.js, React, TypeScript, Web Development, JavaScript, Portfolio',
  generator: 'Next.js 16',
  metadataBase: new URL('https://yourportfolio.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Full-Stack Developer Portfolio',
    title: 'Full-Stack Developer | Premium Web Solutions',
    description: 'Expert full-stack JavaScript development. Portfolio featuring modern web applications, case studies, and premium services.',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Developer | Premium Web Solutions',
    description: 'Expert full-stack JavaScript development and modern web solutions.',
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
  // icons: {
  //   icon: '/icon.svg',
  //   apple: '/apple-icon.png',
  // },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
