import {Shield, Clock4, CreditCard, MapPin, Headphones, FileBadge, Users, Zap} from 'lucide-react'
import FeatureCard from './FeatureCard';


const features = [
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <Shield className='w-8 h-8' />
    },
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <Clock4 className='w-8 h-8' />
    },
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <CreditCard className='w-8 h-8' />
    },
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <MapPin className='w-8 h-8' />
    },
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <Headphones className='w-8 h-8' />
    },
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <FileBadge className='w-8 h-8' />
    },
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <Users className='w-8 h-8' />
    },
    {
        title: "Fully Insured",
        description: "All our vehicles come from comprehensive insurance coverage for your peace of mind",
        icon: <Zap className='w-8 h-8' />
    }
]

export default function Features(){
    return(
        <section className='py-16 bg-gray-100 px-4 sm:px-6 lg:px-28'>
            <div className='max-w-7xl mx-auto text-center'>
                <h2 className='sm:text-4xl text-3xl font-bold text-gray-800 mb-4 head-reveal'>Why Choose AutoRent?</h2>
                <p className='text-gray-600 mb-12 max-w-2xl mx-auto text-lg head-reveal'>We're committed to providing you with the best car rental experience through our premium services 
                and customer-first approach</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {features.map((feature, index)=>(
                        <FeatureCard
                            key={index}
                            feature={feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}