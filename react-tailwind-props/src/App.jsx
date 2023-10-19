import { Card } from './components/Card'
import './App.css'

function App() {
  return (
    <>
    <h1 className='bg-violet-200 rounded-md p-4 mb-4'>Tailwind</h1>
    <Card name="Aakarshit" btnText="Visit Me" age="20"/>
    <Card name="Dusky" age="24"/>
    </>
  )
}

export default App
