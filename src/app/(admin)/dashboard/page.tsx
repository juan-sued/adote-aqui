'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

import { Overview } from './components/overview'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { CalendarCheck2, Download, HandPlatter } from 'lucide-react'
import { ListSimpleFlat } from './components/ListZapsDashboard/Index'
import ListResumes from './components/ListResumes/Index'
import Section from '@/components/layout/Section'
import Main from '@/components/layout/Main'
import { AppointmentsTable } from './components/appointments/appointments-table'

export default function DashboardPage() {
  function pagePdfHandler() {
    window.print()
  }

  return (
    <Main>
      <Section>
        <div className="  w-full flex-col flex  animate__animated animate__fadeIn">
          <div className="flex-1 space-y-4  pt-6">
            <div className="flex flex-col sm:flex-row  items-center justify-between space-y-2">
              <div className=" w-full">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              </div>
              <div
                className="flex items-center space-x-2 w-full
              justify-end"
              >
                <Button
                  className="p-2 bg-green-400 hover:bg-green-300"
                  onClick={pagePdfHandler}
                >
                  <Download className="w-full h-full" />
                </Button>
              </div>
            </div>
            <Tabs defaultValue="overview">
              <TabsList className="w-full  h-full sm:w-fit text-xs ">
                <TabsTrigger value="overview">Resumo</TabsTrigger>

                <TabsTrigger
                  value="meus_agendamentos"
                  className="hidden sm:inline-flex"
                >
                  Meus agendamentos
                </TabsTrigger>
                <TabsTrigger
                  value="meus_agendamentos"
                  className="inline-flex sm:hidden "
                >
                  <CalendarCheck2 />
                </TabsTrigger>
                <TabsTrigger
                  value="my_services"
                  className="hidden sm:inline-flex"
                >
                  Meus serviços
                </TabsTrigger>
                <TabsTrigger
                  value="my_services"
                  className="inline-flex sm:hidden "
                >
                  <HandPlatter />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <ListResumes
                  totalZaps={100}
                  averageCompletion={85}
                  averageLikes={4.5}
                  championZap={{
                    quiz: { title: 'Matemática Básica' },
                    percentConclusion: 90,
                    totalLikes: 50,
                  }}
                  totalLikes={10}
                />
                <div className="  grid gap-4 grid-cols-1 lg:grid-cols-4">
                  <Card className=" col-span-2  w-full h-fit ">
                    <CardHeader>
                      <CardTitle>Agendamentos</CardTitle>
                      <CardDescription>por mês</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2 ">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className=" col-span-2   w-full  ">
                    <CardHeader>
                      <CardTitle>Agendamentos recentes</CardTitle>
                      <CardDescription>
                        Você tem 53 agendamentos para essa semana.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ListSimpleFlat />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="meus_agendamentos">
                <Card className=" w-full ">
                  <CardHeader>
                    <CardTitle>Solicitação de etiquetas</CardTitle>
                    <CardDescription>
                      Envie uma solicitação de etiquetas para impressão de
                      códigos de barras.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="w-full  p-0 grid place-items-center">
                    <AppointmentsTable />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="my_services">
                <div className="h-96 flex justify-center items-center">
                  Lista de serviços aqui
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Section>
    </Main>
  )
}
