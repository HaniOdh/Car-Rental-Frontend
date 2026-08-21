import {MapPin, Users, Cog, Fuel, Star} from 'lucide-react'

//name: 'Kia Sportage',
//year: 2022,
//location: 'London',
//seats: 5,
//transmission: 'Automatic',
//fuel: 'Hybrid',
//price: 65,
//rating: 4.3,
//badges: ['Hybrid', 'Modern Interior'],
//type: 'Crossover',
//status: 'Available',
//image: kia,


export default function CarCard({car}){
    return(
        <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-3 reveal-y">
            <div className="relative overflow-hidden">
                <img src={car.image} alt={car.name} className="rounded-md w-full h-48 sm:h-56 md:h-60 object-cover" />
                <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                    {car.type}
                </span>
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                    {car.status}
                </span>
            </div>

            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <div className="text-yellow-500 text-sm flex items-center gap-1">
                        <Star className="h-5 w-5"/>{car.rating}
                    </div>
                </div>

                <p className="text-sm text-gray-500">{car.year}</p>

                <div className="flex items-center text-sm text-gray-500 my-4 gap-1">
                    <MapPin className="w-5 h-5" /> <span>{car.location}</span>
                </div>

                <div className="flex sm:items-center sm:flex-row flex-col sm:gap-10 gap-2 mt-2 text-gray-600 text-sm">
                    <span className="flex items-center gap-1"><Users className="h-4 w-4 text-blue-500" />{car.seats} seats</span>
                    <span className="flex items-center gap-1"><Cog className="h-4 w-4 text-blue-500" />{car.transmission}</span>
                    <span className="flex items-center gap-1"><Fuel className="h-4 w-4 text-blue-500" />{car.fuel}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                    {car.badges.map((badge,i) => (
                        <span key={i} className="bg-gray-50 text-xs px-2 py-1 rounded-full font-semibold border border-gray-200">
                            {badge}
                        </span>
                    ))}
                </div>

                <div className="mt-4">
                    <p className="text-lg font-bold text-blue-500"> $ {car.price}
                        <span className="text-sm font-normal text-gray-500">/day</span>
                    </p>
                </div>

                <div className="flex sm:flex-row flex-col mt-4 gap-3">
                    <button className="sm:w-1/2 w-full border border-gray-300 px-3 py-2 rounded cursor-pointer transition 
                    duration-300 hover:bg-gray-300">
                        View Details
                    </button>
                    <button className="sm:w-1/2 w-full border bg-green-600 text-white px-3 py-2 rounded cursor-pointer transition 
                    duration-300 hover:bg-green-700">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}