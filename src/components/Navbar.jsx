import { useNavigate } from 'react-router-dom'
import { Home, Menu, X } from 'lucide-react'

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen, services }) => {
    const navigate = useNavigate()

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div
                        onClick={() => navigate('/')}
                        className="flex items-center cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
                            <Home className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">FastSewa</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => navigate('/')}
                            className="text-gray-700 hover:text-orange-600 font-medium transition">
                            Home
                        </button>

                        <div className="relative group">
                            <button className="text-gray-700 hover:text-orange-600 font-medium transition">Services</button>

                            {/* Dropdown */}
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => navigate(`/services/${service.id}`)}
                                        className="block w-full text-left px-6 py-3 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl transition">
                                        {service.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/about')}
                            className="text-gray-700 hover:text-orange-600 font-medium transition">
                            About
                        </button>

                        <button
                            onClick={() => navigate('/contact')}
                            className="text-gray-700 hover:text-orange-600 font-medium transition">
                            Contact
                        </button>

                        <button
                            onClick={() => navigate('/get-started')}
                            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-700">
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <button
                            onClick={() => {
                                navigate('/')
                                setMobileMenuOpen(false)
                            }}
                            className="block w-full text-left px-4 py-3 hover:bg-gray-50">
                            Home
                        </button>

                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    navigate(`/services/${service.id}`)
                                    setMobileMenuOpen(false)
                                }}
                                className="block w-full text-left px-4 py-3 hover:bg-gray-50">
                                {service.name}
                            </button>
                        ))}

                        <button
                            onClick={() => {
                                navigate('/about')
                                setMobileMenuOpen(false)
                            }}
                            className="block w-full text-left px-4 py-3 hover:bg-gray-50">
                            About
                        </button>

                        <button
                            onClick={() => {
                                navigate('/contact')
                                setMobileMenuOpen(false)
                            }}
                            className="block w-full text-left px-4 py-3 hover:bg-gray-50">
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation
