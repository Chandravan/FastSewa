import { Check } from 'lucide-react'

const WhyChooseUs = () => {
    const features = [
        { title: 'Verified Professionals', desc: 'All service providers are thoroughly vetted and certified' },
        { title: 'Best Prices', desc: 'Competitive pricing with transparent quotations' },
        { title: 'Quality Assurance', desc: 'We guarantee the highest quality of service delivery' },
        { title: 'Quick Response', desc: 'Fast response time for all service requests' },
        { title: 'Secure Platform', desc: 'Your data and transactions are completely secure' },
        { title: '24/7 Support', desc: 'Round-the-clock customer support for your needs' }
    ]

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Choose FastSewa?</h2>
                <p className="text-xl text-gray-600">Your satisfaction is our priority</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <Check className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs
