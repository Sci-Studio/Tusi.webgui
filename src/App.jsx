import { useState } from 'react'
import './App.css'
import ToolBar from './components/tool-bar/ToolBar';
import MainWindow from './components/main-window/MainWindow';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <ToolBar/>
      <MainWindow/>
    </div>
  )
}

export default App
