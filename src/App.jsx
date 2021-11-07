import { Header } from './components/header'
import './App.css'
import { FirstSection } from './components/firstSection'
import { Carosel } from './components/carosel/carosel'
import { Differentials } from './components/differentials'
import { ThirdSection } from './components/thirdSection'
import { PlansSection } from './components/plansSection'
import { Depoimentos } from './components/depoimentos'


export function App() {
  return (
    <main>
      <Header />
      <FirstSection />
      <Carosel />
      <Differentials />
      <ThirdSection />
      <PlansSection />
      <Depoimentos />
    </main>
  )
}

