import { useState } from 'react'
import './App.css'
import ToolBar from './components/tool-bar/ToolBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToolBar/>
    </div>
  )
}

export default App
