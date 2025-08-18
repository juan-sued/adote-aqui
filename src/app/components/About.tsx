import Section from '@/components/layout/Section'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import paramsSite from '@/data/paramsSite'
import { LucideArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <Section id="about-us">
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
        <figure className="containerAboutUs w-full h-full flex items-center">
          <AspectRatio ratio={4 / 3.23}>
            <Image
              src="/assets/collaboration-real-time.svg"
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </figure>

        <figcaption className="gap-5 sm:gap-6 lg:gap-7 p-4 sm:p-6 w-full flex flex-col justify-center">
          <h1 className="text-base sm:text-lg text-primary font-semibold font-bebas">
            SOBRE
          </h1>
          <h2 className="text-foreground  text-2xl sm:text-4xl lg:text-6xl font-bold mt-2 leading-tight ">
            {paramsSite.about.name}
          </h2>

          {paramsSite.about.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium "
            >
              {paragraph}
            </p>
          ))}

          <Link href={paramsSite.contactList[0].href}>
            <Button
              className="w-full md:w-fit text-white  text-sm sm:text-md bg-primary hover:bg-primary/90 gap-2 py-3 sm:py-4 px-8 sm:px-10   h-fit"
              size="lg"
            >
              {paramsSite.ctaButtonText}
              <LucideArrowUpRight size={20} />
            </Button>
          </Link>
        </figcaption>
      </div>
    </Section>
  )
}
