import { useState } from 'react';
import './App.css'


function App() {
  let [counter, setCounter] = useState(0)
  let addValue = () => {
    console.log("Clicked: ", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  let removeValue = () => {
    console.log("Clicked: ", counter);
    // counter = counter - 1;
    setCounter(counter - 1);
  }


  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Gain: </button>
    <br />
    <br />
    <button onClick={removeValue}>Loss: </button>
    </>
  )
}

export default App
