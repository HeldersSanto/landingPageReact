import { Header } from './components/header'
import './App.css'
import { FirstSection } from './components/firstSection'
import { Carosel } from './components/carosel/carosel'
import { Differentials } from './components/differentials'
import { ThirdSection } from './components/thirdSection'

export function App() {
  return (
    <main>
      <Header />
      <FirstSection />
      <Carosel />
      <Differentials />
      <ThirdSection />
    </main>
  )
}

