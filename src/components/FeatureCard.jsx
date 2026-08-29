


export default function FeatureCard({feature}){
    return(
        <div className="flex flex-col bg-white items-center text-center border border-gray-300 rounded-lg p-6 shadow-sm 
        hover:shadow-md transform hover:-translate-y-2 transition duration-300 reveal-y">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 mb-4 text-white">
                {feature.icon}
            </div>
            <h3 className="font-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
    );
}