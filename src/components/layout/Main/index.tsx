import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface IMain {
  children: ReactNode
  className?: string
}

export default function Main({ children, className }: IMain) {
  return (
    <>
      <main
        className={cn(
          'flex flex-col  gap-40  w-full  my-[120px] mt-[35vh]   justify-center items-center animate__animated animate__fadeIn',
          className,
        )}
      >
        {children}
      </main>
    </>
  )
}
