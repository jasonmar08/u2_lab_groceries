import { useState } from 'react'
import './App.css'
import Groceries from './components/Groceries.jsx'

const App = () => {
  const banana = {
    name: 'Banana',
    brand: 'Chiquita',
    units: '1',
    quantity: '1 lb',
    isPurchase: ''
  }
  const apple = {
    name: 'Apple',
    brand: 'Fuji',
    units: '1',
    quantity: '1 lb',
    isPurchase: ''
  }
  const lemon = {
    name: 'Lemon',
    brand: 'Meyer Lemons',
    units: '1',
    quantity: '1 lb',
    isPurchase: ''
  }
  const [totalBanana, setTotalBanana] = useState(2)
  const [totalApple, setTotalApple] = useState(6)
  const [totalLemon, setTotalLemon] = useState(4)

  const removeBanana = () => {
    if (totalBanana > 0) {
      let count = totalBanana - 1
      setTotalBanana(count)
    }
  }

  const removeApple = () => {
    if (totalApple > 0) {
      let count = totalApple - 1
      setTotalApple(count)
    }
  }

  const removeLemon = () => {
    if (totalLemon > 0) {
      let count = totalLemon - 1
      setTotalLemon(count)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <br />
      <main>
        <Groceries
          name={banana.name}
          brand={banana.brand}
          quantity={banana.quantity}
          units={banana.units}
          isPurchase={banana.isPurchase}
          totalFruit={totalBanana}
          removeItems={removeBanana}
        />
        <br />
        <Groceries
          name={apple.name}
          brand={apple.brand}
          quantity={apple.quantity}
          units={apple.units}
          isPurchase={apple.isPurchase}
          totalFruit={totalApple}
          removeItems={removeApple}
        />
        <br />
        <Groceries
          name={lemon.name}
          brand={lemon.brand}
          quantity={lemon.quantity}
          units={lemon.units}
          isPurchase={lemon.isPurchase}
          totalFruit={totalLemon}
          removeItems={removeLemon}
        />
      </main>
    </div>
  )
}
export default App
