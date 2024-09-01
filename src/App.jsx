import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { Route, Routes } from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Error - Page not Found !!</h1>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
