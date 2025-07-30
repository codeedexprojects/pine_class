import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Trainers from './pages/Trainers'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
