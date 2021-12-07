import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    )
}

export default App
