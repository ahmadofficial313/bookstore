import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Course from './pages/Course.jsx'
import Register from './pages/Register.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='course' element={<Course/>}/>

      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='register' element={<Register/>}/>




      
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
