'use client'

import { Button } from '@/components/ui/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { createCustomerSchema } from './schemas'
import { CreateCustomerValues } from './types'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Textarea } from '@/components/ui/textarea'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { sendContactWhatsAppMessage } from './utils'

export default function FormService() {
  const form = useForm<CreateCustomerValues>({
    resolver: zodResolver(createCustomerSchema),
    mode: 'onChange',
    defaultValues: {
      contactForm: 'message',
    },
  })

  function onSubmit(data: CreateCustomerValues) {
    sendContactWhatsAppMessage(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <section className=" flex flex-col  gap-10 justify-between items-start sm:flex-row ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Maria das Dores Cunha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactForm"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full gap-2">
                <FormLabel className="leading-5">
                  Qual a preferência de contato?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                    className="flex gap-4 mt-2"
                  >
                    <RadioGroupItem
                      value="call"
                      id="contact-call"
                      className={`cursor-pointer px-4 py-2 border rounded-md ${
                        field.value === 'call'
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300'
                      } hover:bg-blue-500 hover:text-white`}
                    />
                    <label
                      htmlFor="contact-call"
                      className={`text-sm ${
                        field.value === 'call'
                          ? 'text-blue-600'
                          : 'text-gray-700'
                      }`}
                    >
                      Ligação
                    </label>

                    <RadioGroupItem
                      value="message"
                      id="contact-message"
                      className={`cursor-pointer px-4 py-2 border rounded-md ${
                        field.value === 'message'
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white text-gray-700 border-gray-300'
                      } hover:bg-green-500 hover:text-white`}
                    />
                    <label
                      htmlFor="contact-message"
                      className={`text-sm ${
                        field.value === 'message'
                          ? 'text-green-600'
                          : 'text-gray-700'
                      }`}
                    >
                      Mensagem
                    </label>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section>
          <Accordion type="single" className=" w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Conte um pouco da sua história
              </AccordionTrigger>
              <AccordionContent className="p-1 data-[state=open]:bg-slate-100 md:data-[state=open]:bg-slate-900">
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos um pouco sobre você, seus desafios e o que espera do atendimento."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Button
          className="bg-green-600 hover:bg-green-500   active:scale-95 flex gap-3"
          type="submit"
        >
          <Check className="w-7" />
          Confirmar
        </Button>
      </form>
    </Form>
  )
}
