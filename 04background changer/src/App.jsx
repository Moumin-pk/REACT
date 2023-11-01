import { useState } from 'react'
import './App.css'

function App() {
  const [Color, setColor] = useState('orange')

  return (
    <div className='box' style={{background: Color}}>
    <div className='panel'>
      <div className='color-panel' style={{background: 'red'}} onClick={()=> setColor('red')}></div>
      <div className='color-panel' style={{background: 'cyan'}} onClick={() => setColor('cyan')} ></div>
      <div className='color-panel' style={{background: 'gray'}} onClick={() => setColor('gray')} ></div>
      <div className='color-panel' style={{background: 'blue'}}onClick={() => setColor('blue')} ></div>
      
     
    </div>
    </div>
  )
}

export default App
