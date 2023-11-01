import { useState } from 'react'
import './App.css'
import Card from './component/card' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-orange-500'>MOUMIN AHMAD😊</h2>
      <div className='card'>
      <Card Name= 'Moumin' btnText = 'clickme' />
      <Card Name= 'Sehar' btnText = 'Visitme' />
      
      </div>
    </>

)
}

export default App
