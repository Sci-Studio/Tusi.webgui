import { useState } from 'react'
import './App.css'
import CadDisplay from './components/cad-display/CadDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CadDisplay></CadDisplay>
  )
}

export default App
