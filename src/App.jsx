import { Header } from './components/header'
import './App.css'
import { FirstSection } from './components/firstSection'
import { Slider } from './components/carosel/carosel'

export function App() {
  return (
    <main>
      <Header />
      <FirstSection />
      <Slider />
    </main>
  )
}

