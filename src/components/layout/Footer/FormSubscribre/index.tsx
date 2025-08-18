'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { SubscribreNewsListValues } from './types'
import { subscribreNewsListSchema } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'

import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

export default function FormSubscribre() {
  const form = useForm<SubscribreNewsListValues>({
    resolver: zodResolver(subscribreNewsListSchema),
    mode: 'onChange',
  })

  function onSubmit(data: SubscribreNewsListValues) {
    toast(
      <pre className="mt-2 w-[340px] rounded-md  p-4">
        Valores enviados:
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>,
    )
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-6  items-center justify-between">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormMessage />
                  <FormControl>
                    <Input
                      placeholder="Entre com seu email"
                      className="border-none w-full min-w-[200px] px-0 placeholder:text-white text-md"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Separator className="flex sm:hidden  mt-[-24px]  w-full" />

            <Button className="   rounded-full  min-w-1/2 whitespace-nowrap p-8 py-7">
              Inscrever-se
            </Button>
          </div>
          <Separator className="hidden sm:flex mt-2 w-full" />
        </form>
      </Form>
    </>
  )
}
