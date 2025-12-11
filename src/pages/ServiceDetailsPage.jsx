import { useParams } from 'react-router-dom'
import { services } from '../data/services'

//import BookingForm from '../components/BookingForm'

const ServiceDetailsPage = () => {
    const { id } = useParams()
    const service = services.find((s) => s.id === id)

    return (
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
            <ServiceDetails service={service} />
            <BookingForm service={service} />
        </div>
    )
}

export default ServiceDetailsPage
