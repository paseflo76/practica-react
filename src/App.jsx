import React, { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <p>
          your clicked here {count} {count === 1 ? 'time' : 'times'}
        </p>
      </div>
      <div className='buttons'>
        <button className='restar' onClick={() => setCount(count - 1)}>
          Restar
        </button>
        <button className='sumar' onClick={() => setCount(count + 1)}>
          Sumar
        </button>
      </div>
    </div>
  )
}
