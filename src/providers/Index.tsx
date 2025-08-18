import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}
