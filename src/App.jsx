import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navbar'
import HomePage from './pages/HomePage'
import { services } from './data/services'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import Footer from './components/Footer'

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <Navigation
                services={services}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage services={services} />}
                />
                <Route
                    path="/services/:serviceId"
                    element={<ServiceDetailsPage services={services} />}
                />
                <Route
                    path="/about"
                    element={<div>About Page</div>}
                />
                <Route
                    path="/contact"
                    element={<div>Contact Page</div>}
                />
                <Route
                    path="/get-started"
                    element={<div>Start Page</div>}
                />
            </Routes>
            <Footer />
        </>
    )
}

export default App
