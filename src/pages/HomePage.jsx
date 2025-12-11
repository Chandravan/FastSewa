import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import WhyChooseUs from '../components/WhyChooseUs'

const HomePage = ({ services }) => {
    return (
        <div className="min-h-screen">
            <HeroSection />

            <div className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-5xl font-bold text-center mb-12">Our Services</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </div>

            <StatsSection />
            <WhyChooseUs />
        </div>
    )
}

export default HomePage
