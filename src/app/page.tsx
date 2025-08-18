import CatchPhrase from './components/CatchPhrase'
import Benefits from './components/Benefits'
import About from './components/About'
import CallToAction from './components/CallToAction'
import FAQ from './components/FAQ'
import Main from '@/components/layout/Main'
import { CallToActionFlat } from '@/components/shared/Sections/CallToActionFlat'
import Steps from './components/Steps'

export default function Home() {
  return (
    <Main>
      <CatchPhrase />
      <Benefits />
      <Steps />
      <CallToActionFlat />
      <About />
      <CallToAction />
      <CallToActionFlat />
      <FAQ />
    </Main>
  )
}
