import bmw from '../assets/bmw.jpg'
import audi from '../assets/audi.jpg'
import ford from '../assets/ford.jpg'
import kia from '../assets/kia.jpg'
import tesla from '../assets/tesla.jpg'
import toyota from '../assets/toyota.jpg'
import {Car, MapPin, Users, Cog, Fuel, Star, ArrowRight} from 'lucide-react'

import CarCard from './CarCard'



const cars = [
  {
    id: 1,
    name: 'Tesla Model 3',
    year: 2023,
    location: 'San Francisco',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    price: 89,
    rating: 4.8,
    badges: ['Autopilot', 'Premium Audio', '+2 more'],
    type: 'Electric',
    status: 'Available',
    image: tesla,
  },
  {
    id: 2,
    name: 'BMW X5',
    year: 2023,
    location: 'New York',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    price: 149,
    rating: 4.7,
    badges: ['Leather Seats', 'Navigation', '+2 more'],
    type: 'Luxury SUV',
    status: 'Available',
    image: bmw,
  },
  {
    id: 3,
    name: 'Audi A4',
    year: 2023,
    location: 'Los Angeles',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    price: 79,
    rating: 4.6,
    badges: ['Virtual Cockpit', 'Heated Seats', '+2 more'],
    type: 'Sedan',
    status: 'Available',
    image: audi,
  },
  {
    id: 4,
    name: 'Toyota Auris',
    year: 2022,
    location: 'New York',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    price: 49,
    rating: 4.4,
    badges: ['Reliable', 'Fuel Efficient', '+1 more'],
    type: 'Sedan',
    status: 'Available',
    image: toyota,
  },
  {
    id: 5,
    name: 'Ford Explorer',
    year: 2021,
    location: 'Phoenix',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    price: 69,
    rating: 4.5,
    badges: ['Spacious', 'All-wheel drive'],
    type: 'SUV',
    status: 'Available',
    image: ford,
  },
  {
    id: 6,
    name: 'Kia Sportage',
    year: 2022,
    location: 'London',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    price: 65,
    rating: 4.3,
    badges: ['Hybrid', 'Modern Interior'],
    type: 'Crossover',
    status: 'Available',
    image: kia,
  },
];


export default function FeaturedCars(){
    return(
        <section className='bg-white-100 py-20 sm:px-16 px-4'>
            <div className='max-w-7xl mx-auto text-center mb-12 head-reveal'>
                <h2 className='text-3xl sm:text-4xl font-bold mb-2 flex justify-center items-center gap-2'>
                    <span className='text-blue-500'><Car className='w-12 h-12' /></span>
                    <span className='text-gray-800'>Featured Cars</span>
                </h2>
                <p className='text-gray-600 text-lg'>Discover our handpicked selection of premium vehicles, perfect for any journey.</p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {cars.map((car) => (
                    <CarCard 
                        key={car.id} 
                        car={car}
                    />
                    
                ))}
            </div>
            <button className='mx-auto flex items-center justify-center mt-12 bg-blue-500 text-white py-3 px-5 
            rounded cursor-pointer transition-color duration-300 hover:bg-blue-700 gap-2'>View All Cars 
            <ArrowRight className='h-5 w-5' /></button>
        </section>
    );
}