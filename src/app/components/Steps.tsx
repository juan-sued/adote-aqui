'use client'

import Section from '@/components/layout/Section'
import TitleSection from '@/components/shared/TitleSection'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import paramsSite, { IHowItWorks } from '@/data/paramsSite'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface IStepProps extends IHowItWorks {
  top: number
  step: number
  visible: boolean
  active: boolean
  onHoverChange: (id: number | null) => void
}

function StepItem({
  step,
  text,
  visible,
  top,
  description,
  Icon,
  active,
  onHoverChange,
}: IStepProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isOpen = isHovered || active

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverChange(step)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHoverChange(null)
  }

  return (
    <HoverCard open={isOpen} openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <article
          className="absolute left-[-8px] md:left-[-13px] z-50 flex items-center gap-4 min-w-[50vw] text-base transition-all duration-700 ease-in-out"
          style={{ top }}
        >
          <div
            className={`aspect-square w-[50px] font-bold grid place-items-center rounded-full transform transition-transform duration-1000 text-white border-4 border-accent/10 ${
              visible ? 'bg-primary scale-100' : 'scale-0'
            }`}
          >
            {step}º
          </div>

          <div
            className={`transition-opacity duration-1000 w-full hover:text-primary hover:font-bold cursor-pointer ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {text}
          </div>
        </article>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4 text-primary">
          <Icon className="w-16" strokeWidth={1} />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{text}</h4>
            <p className="text-sm text-muted-foreground/80">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function Steps() {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const [progress, setProgress] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState<{ [key: number]: boolean }>(
    {},
  )
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [manualHover, setManualHover] = useState<boolean>(false)
  const requestRef = useRef<number>(0)
  const loopTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!inView) return

    let currentStepIndex = 0
    const steps = paramsSite.steps

    const loopActiveSteps = () => {
      if (manualHover) return
      const step = steps[currentStepIndex]
      if (step) {
        setActiveStep(step.id)
        setTimeout(() => {
          if (!manualHover) setActiveStep(null)
          currentStepIndex = (currentStepIndex + 1) % steps.length
          loopTimeout.current = setTimeout(loopActiveSteps, 1000)
        }, 2000)
      }
    }

    loopTimeout.current = setTimeout(loopActiveSteps, 1000)

    return () => {
      if (loopTimeout.current) clearTimeout(loopTimeout.current)
    }
  }, [inView, manualHover])

  useEffect(() => {
    if (!inView || progress >= 100) return

    const animate = () => {
      setProgress((prev) => {
        const next = Math.min(prev + 1.5, 100)

        paramsSite.steps.forEach(({ id, trigger }) => {
          if (next >= trigger && !visibleSteps[id]) {
            setVisibleSteps((prev) => ({ ...prev, [id]: true }))
          }
        })

        if (next < 100) {
          requestRef.current = requestAnimationFrame(animate)
        }

        return next
      })
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current!)
  }, [inView, progress, visibleSteps])

  const handleHoverChange = (id: number | null) => {
    if (id !== null) {
      setManualHover(true)
      setActiveStep(id)
    } else {
      setManualHover(false)
      setActiveStep(null)
    }
  }

  return (
    <Section id="steps" className="gap-24">
      <TitleSection title={`${paramsSite.steps.length} passos simples`} />

      <div className="w-full flex justify-between items-center px-4 md:px-10">
        <div
          ref={ref}
          className="relative flex flex-col items-center md:flex-row md:justify-between gap-12 scale-[80%] lg:md:scale-[100%]"
        >
          <div className="relative h-[400px] w-6 bg-primary/10 rounded-full overflow-hidden border-4 border-primary/10">
            <div
              className="absolute top-0 w-full bg-primary transition-all duration-[2000ms] ease-linear rounded-full"
              style={{ height: `${progress}%` }}
            />
          </div>

          {paramsSite.steps.map(({ id, text, trigger, description, Icon }) => (
            <StepItem
              key={id}
              step={id}
              id={id}
              trigger={trigger}
              text={text}
              description={description}
              visible={visibleSteps[id] || false}
              top={(trigger / 100) * 400 - 20}
              Icon={Icon}
              active={activeStep === id}
              onHoverChange={handleHoverChange}
            />
          ))}
        </div>

        <Image
          src="/assets/steps-form.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[30vw] h-full"
          alt=""
        />
      </div>
    </Section>
  )
}
