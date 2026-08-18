import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Unlink } from "lucide-react";


export default function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <Link to={'/'} className="flex items-center space-x-2"><Car className="w-8 h-8 text-blue-500" />
                    <span className="text-xl font-bold">AutoRent</span></Link>
                    <p className="leading-relaxed my-4">Your trusted partner for premium car rentals. Experience the freedom of the road with our quality vehicles
                    and exceptional service.</p>
                    <div className="flex gap-4 mt-2">
                        <Unlink className="hover:text-white cursor-pointer"/>
                        <Unlink className="hover:text-white cursor-pointer"/>
                        <Unlink className="hover:text-white cursor-pointer"/>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Our Cars</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:underline">Economy Cars</a></li>
                        <li><a href="" className="hover:underline">Luxuray Vehicles</a></li>
                        <li><a href="" className="hover:underline">SUVs & Trucks</a></li>
                        <li><a href="" className="hover:underline">Electric Cars</a></li>
                        <li><a href="" className="hover:underline">Long-term Rentals</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><Phone className="text-blue-400 w-5 h-5"/> +1 (555) 123-4569</li>
                        <li className="flex items-center gap-2"><Mail className="text-blue-400 w-5 h-5"/> info@autrent.com</li>
                        <li className="flex items-center gap-2"><MapPin className="text-blue-400 w-5 h-5"/> 123 Main St. New York State 12345</li>
                    </ul>
                </div>
            </div>

            <div className="border-t bordedr-gray-700 mt-10 py-6 text-sm flex flex-col sm:flex-row justify-between items-center 
            text-gray-500">
                <p>&copy; {new Date().getFullYear()} AutoRent. All Rights Reserved</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <a href="" className="hover:underline">Privacy Policy</a>
                    <a href="" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}