import Logo from '../Header/Logo'
import { Button } from '@/components/ui/button'
import { LucideArrowUpRight } from 'lucide-react'
import { AlertDialogBasic } from '@/components/shared/Alerts/AlertBasic'
import termsAndConditions from '@/data/termsAndConditions'
import Link from 'next/link'
import Section from '../Section'
import paramsSite from '@/data/paramsSite'

export default function Footer() {
  return (
    <footer className=" text-foreground   bg-background dark:bg-opacity-40  flex flex-col items-center w-full justify-center">
      <Section className=" gap-10 md:gap-36">
        <div className="h-full w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="grid gap-5 w-full">
            <h1 className="font-semibold text-3xl md:text-5xl max-w-[500px]">
              {paramsSite.catchPhrase}
            </h1>
          </div>

          <div className="flex flex-col  justify-end items-end md:items-end w-full">
            <Link
              href={paramsSite.contactList[0].href}
              className="w-full flex justify-end"
            >
              <Button
                className="font-light text-md bg-primary hover:bg-primary/90 gap-2 py-4 px-10 rounded-full w-full md:w-fit  h-fit"
                size="lg"
              >
                {paramsSite.ctaButtonText}
                <LucideArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-10 ">
          <div className="w-full grid gap-5">
            <Button size="lg" className=" rounded-full w-full md:w-fit">
              <Logo />
            </Button>

            <h4 className="max-w-full md:max-w-[300px]  ">
              {paramsSite.headline}
            </h4>
            <p className="text-muted-foreground">
              {paramsSite.contactList[0].description}
            </p>
          </div>
          <ListLinks title="Contato" links={paramsSite.contactList} />
          <ListLinks title="Links Rápidos" links={paramsSite.sections} />
        </div>

        <div className="text-foreground flex flex-col md:flex-row justify-center gap-4 w-full border-t-2 border-slate-200 pt-4">
          <div className="w-full flex justify-center md:justify-start text-sm">
            Copyright © 2025 {paramsSite.applicationName}. Todos os direitos
            reservados.
          </div>

          <AlertDialogBasic
            title="Termos e condições"
            description="Última atualização: 21/10/2024"
            content={termsAndConditions}
          >
            <Button
              variant="link"
              className=" mt-[-6px] text-foreground/90 cursor-pointer text-md"
            >
              Termos e condições
            </Button>
          </AlertDialogBasic>
        </div>
      </Section>
    </footer>
  )
}

interface ILink {
  title: string
  href: string
}
interface IListLink {
  title: string
  links: ILink[]
}

export function ListLinks({ title, links }: IListLink) {
  return (
    <div className="w-full flex justify-start lg:justify-center  items-start gap-5">
      <div className="grid gap-5 w-fit">
        <h2 className="text-lg font-medium text-primary">{title}</h2>
        <ul className="w-full grid gap-4">
          {links.map((link, index) => (
            <li
              key={index}
              className="w-fit text-foreground/90 hover:scale-105 hover:text-primary transition-all hover:translate-x-2  cursor-pointer"
            >
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
