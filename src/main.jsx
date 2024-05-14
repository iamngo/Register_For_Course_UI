import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Information from './components/home/Information.jsx'
import Curriculum from './components/home/Curriculum.jsx'
import RegisterForCourse from './components/home/RegisterForCourse.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/home' element={<Home />}>
          <Route path="info" element={<Information />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="register-for-course" element={<RegisterForCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
