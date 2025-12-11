import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10" />
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='white' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 py-24">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">FastSewa Super Portal</h1>
                    <p className="text-2xl md:text-3xl mb-4 text-orange-100">6 Essential Services, One Platform</p>
                    <p className="text-lg text-orange-50 mb-12 max-w-2xl mx-auto">
                        Your trusted partner for construction, security, legal services, healthcare, land verification, and maintenance solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                            Get Started
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <HeroSection />
        </>
    )
}

export default Home
