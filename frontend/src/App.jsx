import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Market from './pages/Market'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/sign-up' element={<Home />} />
        <Route path='/market' element={<Market />} />
      </Routes>
    </div>
  )
}

export default App
