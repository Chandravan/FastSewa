import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navbar'
import Home from './pages/Home'
import { useState } from 'react'

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const services = [
        { id: 'construction', name: 'Construction' },
        { id: 'security', name: 'Security Guard' },
        { id: 'legal', name: 'Legal & GST' },
        { id: 'medical', name: 'Medical Services' },
        { id: 'land', name: 'Land Verification' },
        { id: 'repair', name: 'Repair & Maintenance' }
    ]

    return (
        <>
            <Navigation
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                services={services}
            />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/services/:serviceId"
                    //  element={<ServicePage />}
                />
                <Route
                    path="/about"
                    // element={<About />}
                />
                <Route
                    path="/contact"
                    // element={<Contact />}
                />
                <Route
                    path="/get-started"
                    //  element={<Start />}
                />
            </Routes>
        </>
    )
}
export default App
