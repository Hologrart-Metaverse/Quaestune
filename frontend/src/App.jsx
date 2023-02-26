import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Market from './pages/Market'
import Generation from './pages/Generation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/sign-up' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/canvas' element={<Generation />} />
        <Route path='/canvas/:id' element={<Generation />} />
      </Routes>
    </div>
  )
}

export default App
