import React from 'react'
import './App.css'
import { Navbar } from './components'
import { Usedby, Header, Build, Collab, Frictionless, Live, Videonar, Easeshare, Madetowork, Formoments, Footer } from './containers'


const App = () => {
  return (
    <div className='App'>
        <div className='black__bg'>
            <Navbar />
        </div>
            <Header />
            <Collab />
            <Build />
            <Frictionless />
            <Live />
            <Videonar />
            <Easeshare />
            <Madetowork />
            <Formoments />
            <Usedby />
            <Footer />
    </div>
  )
}

export default App