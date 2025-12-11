import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ service }) => {
    const navigate = useNavigate()
    console.log('SERVICE ICON:', service.name, service.icon)

    const Icon = service.icon

    return (
        <div
            onClick={() => navigate(`/services/${service.id}`)}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

            <div className="p-8">
                <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-5 h-5 text-orange-500" />
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
