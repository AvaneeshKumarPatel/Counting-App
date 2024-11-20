import { useState } from 'react'
import './App.css'

function App() {


const [Counter, setCounter] = useState(0);

  const InCreaseTheValue = () => {
    setCounter(Counter +1)
  }

  const  DeCreaseTheValue = () =>{
    setCounter(Counter -1)
  }

   const ResetValue = () => {
    setCounter(0);
   }
  return (
    <>
      <h1>Counting Web App</h1>

      <h2>  {Counter}</h2> 
       
      <button onClick={InCreaseTheValue}>Increase The Value </button>
      <button onClick={DeCreaseTheValue}>Decrease The Value </button>
      <button onClick={ResetValue}>Reset </button>


    </>
  )
}

export default App
