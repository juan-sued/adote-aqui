import 'animate.css'
import '@/styles/globals.css'
import Providers from '@/providers/Index'
import Header from '@/components/layout/Header'
import NavBarMobile from '@/components/layout/NavBarMobile'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'
import paramsSite from '@/data/paramsSite'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <meta name="theme-color" content="oklch(74.9% 0.104 45.1)" />
      <meta name="language" content="pt-BR" />
      <meta name="application-name" content={paramsSite.applicationName} />
      <body
        className={`${paramsSite.fontFamily.variable} animate__animated animate__fadeIn overflow-x-auto text-primary `}
      >
        <Providers>
          <Header />
          {children}
          <NavBarMobile />
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
