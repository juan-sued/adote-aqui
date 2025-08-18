import Section from '@/components/layout/Section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import paramsSite from '@/data/paramsSite'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="w-full pb-6 flex gap-6 flex-col md:flex-row justify-between items-start">
        <div className="w-full md:max-w-[400px] gap-4 flex flex-col justify-start items-start mb-6 md:mb-0">
          <h1 className="text-lg text-primary font-bold">FAQ&apos;s</h1>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground">
            Tem alguma pergunta?
          </h2>
          <Link href={paramsSite.contactList[0].href}>
            <Button
              size="lg"
              className="mt-5 text-white font-light text-md bg-primary hover:bg-orangeTheme-600 gap-2 py-4 rounded-full w-fit h-fit transition-transform transform hover:scale-105"
            >
              Faça uma pergunta
              <LucideArrowUpRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="w-full max-w-full  md:max-w-[600px]  ">
          <Accordion type="single" collapsible className="w-full ">
            {paramsSite.faq.map((faq, index) => (
              <AccordionItemFaq
                key={index}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  )
}

interface IFaq {
  id: number
  question: string
  answer: string
}
function AccordionItemFaq({ id, question, answer }: IFaq) {
  return (
    <AccordionItem value={id.toString()}>
      <AccordionTrigger aria-controls={`item-${id}`} aria-expanded="false">
        <div className=" flex gap-10 text-sm md:text-xl ">
          <h4 className="text-primary hidden md:flex">0{id}</h4>
          <h2 className="text-foreground">{question}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className=" md:text-lg  flex flex-col  gap-5 text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
}
