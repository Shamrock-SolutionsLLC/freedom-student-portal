import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './index.css'
import LoginPage from './pages/LoginPage'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default App
