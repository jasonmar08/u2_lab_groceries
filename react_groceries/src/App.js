import { useState } from 'react'
import './App.css'
import Groceries from './components/Groceries.jsx'

const App = () => {
  const apple = {
    name: 'Apple',
    item: '12 pack',
    quantity: '1lb',
    units: '1 unit',
    isPurchase: ''
  }
  const pear = {
    name: 'Pear',
    item: '12 pack',
    quantity: '1lb',
    units: '1 unit',
    isPurchase: ''
  }
  const peach = {
    name: 'Peach',
    item: '12 pack',
    quantity: '1lb',
    units: '1 unit',
    isPurchase: ''
  }
  const [totalAppleFruit, setTotalAppleFruit] = useState(5)
  const [totalPearFruit, setTotalPearFruit] = useState(5)
  const [totalPeachFruit, setTotalPeachFruit] = useState(5)

  const removeApple = () => {
    if (totalAppleFruit > 0) {
      let count = totalAppleFruit - 1
      setTotalAppleFruit(count)
    }
  }

  const removePear = () => {
    if (totalPearFruit > 0) {
      let count = totalPearFruit - 1
      setTotalPearFruit(count)
    }
  }

  const removePeach = () => {
    if (totalPeachFruit > 0) {
      let count = totalPeachFruit - 1
      setTotalPeachFruit(count)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
      </header>
      <br />
      <main>
        <Groceries
          name={apple.name}
          item={apple.item}
          quantity={apple.quantity}
          units={apple.units}
          isPurchase={apple.isPurchase}
          totalFruit={totalAppleFruit}
          removeItems={removeApple}
        />
        <br />
        <Groceries
          name={pear.name}
          item={pear.item}
          quantity={pear.quantity}
          units={pear.units}
          isPurchase={pear.isPurchase}
          totalFruit={totalPearFruit}
          removeItems={removePear}
        />
        <br />
        <Groceries
          name={peach.name}
          item={peach.item}
          quantity={peach.quantity}
          units={peach.units}
          isPurchase={peach.isPurchase}
          totalFruit={totalPeachFruit}
          removeItems={removePeach}
        />
      </main>
    </div>
  )
}
export default App
