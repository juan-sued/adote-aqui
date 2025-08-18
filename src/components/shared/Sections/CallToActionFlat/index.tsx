'use client'

import Section from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import paramsSite from '@/data/paramsSite'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function CallToActionFlat() {
  return (
    <Section className="bg-primary/10 max-w-full md:max-w-full py-20 gap-5">
      <h1 className="text-xl md:text-4xl font-bold ">
        {paramsSite.applicationName}
      </h1>
      <p className=" text-muted-foreground text-center">
        {paramsSite.ctaDescriptionText}
      </p>
      <Link href={paramsSite.contactList[0].href}>
        <Button
          className="text-white font-light text-md bg-primary hover:bg-primary/90 gap-2 py-4 px-10 rounded-full w-fit h-fit"
          size="lg"
        >
          {paramsSite.ctaButtonText}
          <LucideArrowUpRight size={20} />
        </Button>
      </Link>
    </Section>
  )
}
