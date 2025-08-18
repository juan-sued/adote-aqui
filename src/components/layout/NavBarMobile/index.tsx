import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { MenuOptions } from './MenuOptions'

export default function NavBarMobile() {
  return (
    <footer className=" lg:hidden w-fit flex justify-end items-center z-[1000]  fixed bottom-4 right-4 ">
      <MenuOptions>
        <Button className="p-4 h-fit  text-lg shadow rounded-full">
          <Menu />
        </Button>
      </MenuOptions>
    </footer>
  )
}
