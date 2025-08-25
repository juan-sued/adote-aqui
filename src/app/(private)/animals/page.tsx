// app/dashboard/page.tsx
import Section from '@/components/layout/Section'
import Main from '@/components/layout/Main'
import { createClient } from '@/utils/supabase/server'

type AnimalWithRelations = {
  id: string
  name: string
  birthday: Date | null
  description: string | null
  isCastrated: boolean | null
  isVaccinated: boolean | null
  isPcd: boolean | null
  createdAt: string
  breed: {
    id: string
    name: string
  } | null
  animalSize: {
    id: string
    name: string
  } | null
  city: {
    id: string
    name: string
  } | null
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: animals, error } = (await supabase.from('animals').select(`
    id,
    name,
    birthday,
    description,
    createdAt,
    isCastrated,
    isVaccinated,
    isPcd,
    breed:breedId (id, name),
    animalSize:animalSizeId (id, name),
    city:cityId (id, name)
    `)) as unknown as {
    data: AnimalWithRelations[] | null
    error: Error
  }

  if (error) {
    console.error(error)
    return <div>Erro ao carregar animais</div>
  }
  console.log('animals', animals)
  return (
    <Main>
      <Section>
        <div className="w-full flex-col flex animate__animated animate__fadeIn">
          {animals?.map((animal) => (
            <div key={animal.id} className="p-4 border-b">
              <h2 className="text-lg font-bold">{animal.name}</h2>
              <p>{animal.description}</p>
              <p>cidade: {animal.city?.name}</p>
              <p>Raça: {animal.breed?.name}</p>
              <p>Porte: {animal.animalSize?.name}</p>
              <p>É castrado?: {animal.isCastrated ? 'sim' : 'não'}</p>
              <p>É vacinado?: {animal.isVaccinated ? 'sim' : 'não'}</p>
              <p>É pcd?: {animal.isPcd ? 'sim' : 'não'}</p>
            </div>
          ))}
        </div>
      </Section>
    </Main>
  )
}
