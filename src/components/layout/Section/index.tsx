import { cn } from '@/lib/utils'
import { ReactNode, HTMLAttributes } from 'react'

interface ISection extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
}

export default function Section({ children, className, ...rest }: ISection) {
  return (
    <section
      className={cn(
        'flex flex-col text-foreground items-center justify-center   w-full max-w-[95%] md:max-w-[85%]',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
