import Section from '@/components/layout/Section'
import { OrderService } from '@/components/shared/FormService/OrderService'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import paramsSite from '@/data/paramsSite'
import { LucideArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function CatchPhrase() {
  return (
    <Section id="hero-section" className="md:flex-row">
      <div className="   w-full md:w-3/4 flex flex-col  items-center justify-center  gap-8">
        <h1 className=" font-bold  text-4xl md:text-5xl text-center animate__animated animate__fadeInUp duration-500 delay-500">
          {paramsSite.applicationName}
        </h1>
        <h2 className="text-start font-medium  text-sm md:text-xl animate__animated animate__fadeInUp duration-700 delay-700">
          {paramsSite.headline}
        </h2>
        <OrderService>
          <Button className=" p-6  px-10 text-xl rounded-full font-light w-full sm:w-fit">
            {paramsSite.ctaButtonText}
            <LucideArrowUpRight size={20} />
          </Button>
        </OrderService>
      </div>

      <div className="w-1/4 h-full hidden md:block">
        <AspectRatio ratio={4 / 4}>
          <Image
            src="/assets/pet_adoption.svg"
            alt="Photo by Drew Beamer"
            fill
            className="pointer-events-none h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </Section>
  )
}
