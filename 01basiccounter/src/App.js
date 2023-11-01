import {useState} from  'react'
import "./App.css";

function App() {
    
let [counter, setcounter] = useState(0)

function addValue(){
  console.log('clicked',counter);
  if(counter < 100){
    setcounter(counter => counter+1)
   
  }
}
function removeValue(){
  console.log('clicked',counter);
  if(counter > 0){
    setcounter(counter => counter - 1)
    // setcounter(counter => counter - 1)
    // setcounter(counter => counter - 1)
    // setcounter(counter => counter - 1)
    // setcounter(counter => counter - 1)
  }
  }

  function Resetbtn(){
    setcounter(0);
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>COUNTER</h1>
        <h1 className='count' >{counter}</h1>

        <div className="btn">
          <button 
          onClick={addValue}>Add Value</button>
          <button 
          onClick={removeValue}>Remove Value</button>
        </div>
        <button className='reset' onClick={Resetbtn}>Reset</button>
        <p>Count value 0 to 100</p>
      </header>
    </div>
  );
}

export default App;
