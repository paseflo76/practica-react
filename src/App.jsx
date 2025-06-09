import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='app'>
      <ShowCount count={counter} />
      <div className='buttons'>
        <button onClick={() => setCounter(counter - 1)} className='restar'>
          Restar
        </button>
        <button onClick={() => setCounter(counter + 1)} className='sumar'>
          Sumar
        </button>
      </div>
    </div>
  )
}

export default App
