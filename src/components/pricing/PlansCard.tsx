import React from 'react'

type PlansCardProps = {
    title: string;  
    tag: string;
    price: string;
    features: string[];
    isPopular: boolean;
}

const PlansCard: React.FC<PlansCardProps> = ({ title, tag, price, features, isPopular }) => {
    return (
      <div className="relative mb-10 lg:mb-0 w-full h-[850px] bg-white rounded border border-[#dddd] text-[#4C4D5F] p-12" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px'}}>
        {isPopular && (
          <div className="absolute top-5 -right-13 bg-[#00b289] text-white text-lg font-bold py-1 px-8" style={{transform: 'rotate(45deg)'}}>
            MOST POPULAR
          </div>
        )}
        <h3 className="text-2xl font-semibold text-[#4c525a]">{title}</h3>
        <p className="text-[#4C4D5F] text-sm mt-1">{tag}</p>
        <div className="text-[#4c525a] font-bold text-6xl mt-4">
            <sup className="text-xl font-medium text-gray-500">$</sup>
          {price} <span className="text-sm font-medium text-gray-500">/MONTH</span>
        </div>
        <hr className="my-4 border-[#00b289]" />
        <div className="space-y-4 text-[#4C4D5F]">
          {features.map((feature, index) => (
            <div className='flex items-center justify-items-start' key={index}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#00b289" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <p className='ml-2'>{feature}</p>
            </div>
          ))}
        </div>
        <button className="absolute bottom-16 w-[80%] bg-[#00b289] text-white font-medium py-4 rounded hover:bg-[#7bdcc5] cursor-pointer transition">
          START FREE
        </button>
      </div>
    );
  };
  

export default PlansCard
