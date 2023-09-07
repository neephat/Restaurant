import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
import About from './About'

const BodyComponent = () => {
  return (
    <div className='body-color'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}

export default BodyComponent