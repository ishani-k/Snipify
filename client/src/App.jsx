import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Result } from './pages/Result'
import { BuyCredits } from './pages/BuyCredits'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredits/>} />
      </Routes>

    </div>
  )
}

export default App