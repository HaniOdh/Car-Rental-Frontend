import { useEffect } from "react";
import {Mail, Lock, Car} from 'lucide-react';
import ScrollReveal from 'scrollreveal';


export default function Login(){

    useEffect(()=>{
        ScrollReveal().reveal(".reveal-x-alt",{
            origin:"right",
            distance:"100px",
            duration:1500,
            easing:"ease-in-out",
            reset:false
        })
    }, [])

    return (
        <div className="py-14 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 px-4">
            <div className="text-center mb-6">
                <div className="text-white text-3xl font-bold flex justify-center items-center gap-2">
                    <Car className="w-10 h-10"/> <span>AutoRent</span>
                </div>
            </div>

            <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-8 pt-5 reveal-x-alt">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-6">Sign in to your account</p>

                <form action="">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5"/>
                            <input type="email" name="email" className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5"/>
                            <input type="password" name="password" className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 
                            rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password"/>
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-2 justify-between text-sm mb-6">
                        <label htmlFor="rememberMe" className="flex items-center gap-1 cursor-pointer">
                            <input type="checkbox" className="cursor-pointer appearance-none h-4 w-4 border border-gray-300 rounded-sm 
                            checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            <span className="text-base">Remember me</span>
                        </label>
                        <a href="#" className="text-blue-500 hover:underline hover:text-blue-700">Forgot Password</a>
                    </div>

                    <button type="submit" className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white rounded-md 
                    py-2 font-medium transition color-transition duration-300">Sign In</button>
                </form>

                <div className="flex items-center justify-between gap-6 my-6">
                    <span className="border-t border-gray-300 w-full"></span>
                    <span className="text-sm text-gray-400 w-full">Or continue with</span>
                    <span className="border-t border-gray-300 w-full"></span>
                </div>

                <div className="flex gap-4 items-center">
                    <button className="w-1/2 flex cursor-pointer justify-center items-center border border-gray-300 py-2 rounded-md
                     hover:bg-blue-700 hover:text-white transition color-transition duration-300"><Mail /></button>
                    <button className="w-1/2 flex cursor-pointer justify-center items-center border border-gray-300 py-2 rounded-md
                     hover:bg-blue-700 hover:text-white transition color-transition duration-300"><Mail /></button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline hover:text-blue-700">Sign Up</a>
                </p>
            </div>
        </div>
    );
}