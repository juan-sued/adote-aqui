import { AspectRatio } from '@/components/ui/aspect-ratio'

import { Card, CardContent } from '@/components/ui/card'

import Image from 'next/image'

import Main from '@/components/layout/Main'
import { AlertDialogBasic } from '@/components/shared/Alerts/AlertBasic'
import termsAndConditions from '@/data/termsAndConditions'
import { Button } from '@/components/ui/button'

import Section from '@/components/layout/Section'
import SignInForm from './signInForm'

export default async function SignIn() {
  return (
    <Main className="mt-[105px]">
      <Section>
        <div className=" w-full md:max-w-3xl">
          <div className="flex flex-col w-full gap-6">
            <Card className=" w-full shadow-lg">
              <CardContent className="grid p-0 md:grid-cols-2">
                <SignInForm />

                <div className="relative hidden  md:flex justify-center items-center">
                  <AspectRatio ratio={4 / 2.8}>
                    <Image
                      src="/assets/login.svg"
                      alt="Photo by Drew Beamer"
                      fill
                      className="pointer-events-none h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>
              </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
              Clicando em continue, você concorda com nossos{' '}
              <AlertDialogBasic
                title="Termos e condições"
                description="Última atualização: 21/10/2024"
                content={termsAndConditions}
              >
                <Button variant="link" className="px-0 text-xs ">
                  Termos de serviço e Política de Privacidade
                </Button>
              </AlertDialogBasic>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  )
}
