import { useState } from 'react'
import './App.css'

function App() {


const [Counter, setCounter] = useState(0);

  const InCreaseTheValue = () => {
    setCounter(Counter +1)
    console.log(Counter);
  }

  const  DeCreaseTheValue = () =>{
    setCounter(Counter -1)
    console.log(Counter);
  }

  return (
    <>
      <h1>Avnish Counter App</h1>

      <h2>Your Current Value is:  {Counter}</h2> 
       
      <button onClick={InCreaseTheValue}>Increase The Value </button>
      <button onClick={DeCreaseTheValue}>Decrease The Value </button>

    </>
  )
}

export default App
