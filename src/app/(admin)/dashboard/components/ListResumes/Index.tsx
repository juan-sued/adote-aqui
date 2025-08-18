import CardResume from './CardResume'
import { ClipboardList, Crown, Smile, ThumbsUp } from 'lucide-react'

interface IListResumes {
  totalZaps: number
  averageCompletion: number
  totalLikes: number
  averageLikes: number
  championZap: {
    quiz: {
      title: string | null
    }
    percentConclusion: number
    totalLikes: number
  }
}

export default function ListResumes({
  totalZaps,
  averageCompletion,
  totalLikes,
  averageLikes,
  championZap,
}: IListResumes) {
  return (
    <>
      <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardResume
          title="Total de Zaps"
          value={totalZaps}
          valueDetail={`Uma média de ${averageCompletion} de conclusões por zap`}
        >
          <ClipboardList />
        </CardResume>
        <CardResume
          title="Total de likes"
          value={totalLikes}
          valueDetail={`Uma média de ${averageLikes} likes por zap`}
        >
          <ThumbsUp />
        </CardResume>
        <CardResume
          title="Zap campeão"
          value={championZap.quiz?.title || 'N/A'}
          valueDetail={`${championZap.percentConclusion}% de conclusões e ${championZap.totalLikes} likes`}
          classNameValue="text-md"
        >
          <Crown />
        </CardResume>
        <CardResume
          title="Moral"
          value={'Bom'}
          valueDetail={`Você tem ${'75'} pontos de moral`}
        >
          <Smile />
        </CardResume>
      </div>
    </>
  )
}

// Mocked data for testing
const mockedData: IListResumes = {
  totalZaps: 120,
  averageCompletion: 85,
  totalLikes: 300,
  averageLikes: 25,
  championZap: {
    quiz: {
      title: 'Quiz Campeão',
    },
    percentConclusion: 95,
    totalLikes: 150,
  },
}

// Example usage
ListResumes(mockedData)
