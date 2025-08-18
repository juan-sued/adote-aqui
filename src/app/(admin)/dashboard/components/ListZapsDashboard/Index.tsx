import CardListSimpleFlat from './CardListSimpleFlat'

const mockDashboardData = {
  services: {
    recentsCreatedServices: [
      {
        title: 'Polimento Automotivo',
        description:
          'Serviço de polimento para remoção de riscos e brilho intenso.',
        difficulty: 'EASY',
        completions: 15,
        attempts: 20,
        category: { title: 'Estética Externa' },
      },
      {
        title: 'Higienização Interna',
        description:
          'Limpeza completa do interior do veículo, incluindo bancos e carpetes.',
        difficulty: 'MEDIUM',
        completions: 10,
        attempts: 18,
        category: { title: 'Estética Interna' },
      },
      {
        title: 'Vitrificação de Pintura',
        description:
          'Aplicação de proteção cerâmica para maior durabilidade e brilho.',
        difficulty: 'HARD',
        completions: 5,
        attempts: 12,
        endings: 3,
        category: { title: 'Proteção de Pintura' },
      },
    ],
  },
}

export function ListSimpleFlat() {
  const dashboardData = mockDashboardData

  if (dashboardData) {
    return (
      <div className="space-y-4">
        {dashboardData?.services.recentsCreatedServices.map((zap, index) => {
          let bgColor = 'dark:bg-transparent '

          switch (zap.difficulty) {
            case 'EASY':
              bgColor =
                'bg-green-500/30 text-green-500    dark:border-chart-2  '
              break
            case 'MEDIUM':
              bgColor = 'bg-yellow-500/30 text-yellow-500 dark:border-chart-1'
              break
            case 'HARD':
              bgColor = 'bg-red-500/30 text-red-500 dark:border-chart-4'
              break
          }

          const endings = zap.endings ?? 0
          const attempts = zap.attempts ?? 0

          const percentEndings = isNaN(endings / attempts)
            ? 0
            : (Math.round((endings / attempts) * 100) ?? 0)

          return (
            <CardListSimpleFlat
              key={index}
              title={zap.title ?? ''}
              description={zap.description ?? ''}
              avatarFallback={zap?.category?.title[0] ?? ''}
              value={percentEndings}
              className={bgColor}
            />
          )
        })}
      </div>
    )
  } else {
    return (
      <div className=" w-full   h-[350px] flex justify-center items-center  ">
        <h1>Não há dados para monstrar</h1>
      </div>
    )
  }
}
