'use client'

import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

export default function ToggleTheme({ children }: { children: ReactNode }) {
  const { setTheme, theme } = useTheme()

  function alternTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <div onClick={alternTheme}>{children}</div>
    </>
  )
}
