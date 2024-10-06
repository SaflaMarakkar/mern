import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>EMPLOYEE APP</h1>
      <Routes>
        <Route path='/add' element={<Add/>} />
        <Route path='/view' element={<View />} />
      </Routes>
    </>
      
        
  )
}

export default App
