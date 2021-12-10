import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import Contactus from './pages/Contactus'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team/team.jsx'
import Events from './pages/Events/Events'

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/team' element={<Team />} />
                <Route path='/events' element={<Events />} />
               
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App
