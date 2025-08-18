import { Button } from '@/components/ui/button'
import paramsSite from '@/data/paramsSite'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section
      id="approach"
      className="relative w-[99.4vw] grid gap-10 px-6 sm:px-10 lg:px-24 py-20 bg-[url('/assets/dog_and_cat.png')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true" />
      <div className="relative gap-10 sm:gap-20 pb-6 flex flex-col justify-center z-10">
        <div className="justify-start TitleSection w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            {paramsSite.specialty.name}
          </h2>
        </div>

        <div className="descriptionSection w-full grid gap-6 sm:gap-10">
          <p className="text-md sm:text-lg text-slate-200 font-semibold">
            {paramsSite.specialty.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={paramsSite.contactList[0].href}>
              <Button
                className="text-white font-light text-md bg-primary hover:bg-primary/90 gap-2 py-4 px-10 rounded-full w-fit h-fit"
                size="lg"
              >
                {paramsSite.ctaButtonText}
                <LucideArrowUpRight size={20} />
              </Button>
            </Link>
            <Link href={paramsSite.contactList[0].href}>
              <Button
                variant="outline"
                className="font-light gap-2 py-4 px-10 rounded-full w-fit h-fit"
                size="lg"
              >
                {paramsSite.contactList[0].textApresentation}
                <LucideArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
