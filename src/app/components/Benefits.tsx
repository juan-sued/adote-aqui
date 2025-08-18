import Section from '@/components/layout/Section'
import { Card } from '@/components/ui/card'
import paramsSite from '@/data/paramsSite'

export default function Benefits() {
  return (
    <Section id="differences">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {paramsSite.benefits.map((benefit, index) => (
          <CardBenefit
            key={index}
            title={benefit.title}
            icon={benefit.icon}
            description={benefit.description}
          />
        ))}
      </div>
    </Section>
  )
}

interface CardBenefitProps {
  icon: React.ElementType
  title: string
  description: string
}
function CardBenefit({ icon: Icon, title, description }: CardBenefitProps) {
  return (
    <Card className="shadow-none w-full hover:scale-105 transition-transform duration-500 max-w-xs mx-auto border-none bg-transparent">
      <figure className="text-primary grid gap-4 sm:gap-6 ">
        <Icon size={40} strokeWidth={1} />
        <figcaption className="grid gap-2 text-start">
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {description}
          </p>
        </figcaption>
      </figure>
    </Card>
  )
}
