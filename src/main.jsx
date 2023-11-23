import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Category from './Components/Category/Category.jsx'
import Contact from './Components/Contact/Contact.jsx'
 import Footer from './Components/Footer/Footer.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Category />
    <Contact />
    <Footer /> 
  </React.StrictMode>,
)
