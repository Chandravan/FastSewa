import { Building2, Shield, FileText, Heart, MapPin, Wrench } from 'lucide-react'

export const services = [
    {
        id: 'construction',
        name: 'Construction – FastSewa BuildNet',
        description: 'Complete house, renovation & commercial construction solutions',
        color: 'from-orange-500 to-red-500',
        icon: Building2,
        features: ['Home Construction', 'Interior Renovation', 'Commercial Projects', 'Architecture & Planning']
    },
    {
        id: 'security',
        name: 'Security Guard – FastSewa SecureForce',
        description: 'Professional trained security guards for all requirements',
        color: 'from-blue-500 to-indigo-500',
        icon: Shield,
        features: ['Residential Security', 'Corporate Security', 'Event Security', '24/7 Monitoring']
    },
    {
        id: 'legal',
        name: 'Legal & GST – FastSewa Filings',
        description: 'GST, tax, legal filings and documentation services',
        color: 'from-green-500 to-teal-500',
        icon: FileText,
        features: ['GST Registration', 'Income Tax Filing', 'Company Registration', 'Legal Drafting']
    },
    {
        id: 'medical',
        name: 'Medical Services',
        description: 'Doctors, nurses, and health assistance',
        color: 'from-pink-500 to-rose-500',
        icon: Heart,
        features: ['Home Nursing', 'Doctor Visits', 'Medical Attendants', 'Emergency Help']
    },
    {
        id: 'land',
        name: 'Land Verification',
        description: 'Land record check and property document verification',
        color: 'from-purple-500 to-violet-600',
        icon: MapPin,
        features: ['Land Record Check', 'Encumbrance Verification', 'Document Validation', 'Survey Assistance']
    },
    {
        id: 'repair',
        name: 'Repair & Maintenance',
        description: 'All home and office repair services',
        color: 'from-yellow-500 to-orange-600',
        icon: Wrench,
        features: ['Electricians', 'Plumbers', 'Carpenters', 'Appliance Repair']
    }
]
