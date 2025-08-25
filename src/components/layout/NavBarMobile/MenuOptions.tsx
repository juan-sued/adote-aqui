import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import paramsSite from '@/data/paramsSite'

import {
  ChevronRight,
  LogOutIcon,
  Moon,
  ShieldCheckIcon,
  Sun,
} from 'lucide-react'
import Link from 'next/link'
import ToggleTheme from './ToggleTheme'
import { createClient } from '@/utils/supabase/server'
import LogoutButton from '@/components/shared/Buttons/LogOutButton'

export async function MenuOptions({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log('USER MENU OPTIONS', user)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="text-primary w-56 z-[1000]"
        align="end"
        forceMount
      >
        <DropdownMenuGroup>
          {paramsSite.sections.map((section) =>
            section.href !== '#home' ? (
              <Link key={section.title} href={section.href}>
                <DropdownMenuItem className="cursor-pointer ">
                  <span className="font-medium">{section.title}</span>

                  <DropdownMenuShortcut>
                    <ChevronRight className="text-primary" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            ) : null,
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <ToggleTheme>
            <DropdownMenuItem className="cursor-pointer ">
              <span className="font-medium">Trocar tema</span>

              <DropdownMenuShortcut>
                <Sun className=" h-[1.2rem] w-[1.2rem] rotate-0  transition-all dark:-rotate-90  dark:hidden block text-primary" />
                <Moon className="  h-[1.2rem] w-[1.2rem] transition-all dark:block hidden text-primary" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </ToggleTheme>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {user && (
          <>
            <DropdownMenuGroup>
              <LogoutButton>
                <DropdownMenuItem className="cursor-pointer ">
                  <span className="font-medium">Sair</span>

                  <DropdownMenuShortcut>
                    <LogOutIcon className="text-primary" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </LogoutButton>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuGroup className="grid gap-1">
          <Link href={paramsSite.contactList[0].href}>
            <DropdownMenuItem className="cursor-pointer text-white font-semibold  bg-primary focus:bg-primary/90">
              <div className="flex w-full  gap-2 ">
                <ShieldCheckIcon size={20} className="text-white" />
                <p className="text-xs"> {paramsSite.ctaButtonText}</p>
              </div>
              <DropdownMenuShortcut>
                <ChevronRight className="text-white" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
