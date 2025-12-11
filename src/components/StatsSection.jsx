const StatsSection = () => {
    const stats = [
        { value: '10K+', label: 'Happy Customers' },
        { value: '50+', label: 'Expert Professionals' },
        { value: '6', label: 'Service Categories' },
        { value: '24/7', label: 'Customer Support' }
    ]

    return (
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx}>
                            <div className="text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-orange-100">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StatsSection
