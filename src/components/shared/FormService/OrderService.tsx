'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import FormService from '.'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useMediaQuery } from './utils'
import { ReactNode, useState } from 'react'

export function OrderService({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="  px-0 sm:max-w-[800px]">
          <DialogHeader className="px-5">
            <DialogTitle>Solicitar um atendimento</DialogTitle>
            <DialogDescription>
              Responda algumas perguntas e iremos atendê-lo(a) mais
              imediatamente.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="max-h-[300px] px-5 shadow-inner">
            <div className="h-4" />
            <FormService />
            <div className="h-4" />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Fazer um pedido</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-[70vh] px-2 shadow-inner">
          <div className="h-4" />
          <FormService />
          <div className="h-4" />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
