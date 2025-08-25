'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ReactNode } from 'react'

export default function LogoutButton({ children }: { children: ReactNode }) {
  const supabase = createClientComponentClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return <div onClick={handleLogout}>{children}</div>
}
