import React from "react";
import homeimg from '../assests/people_holding_books_with_bg.png'
import hand_price from '../assests/hand_price.png'
import join_our_Team from '../assests/join_our_Team.png'
import total_donations from '../assests/total_donations.png'
import banner_blob from '../assests/banner_blob.png'


const HomeSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-12 px-3 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
      {/* Left Text Content */}
      <div className="absolute max-sm:w-1/2 -left-10 -top-20 md:w-1/3">
      <img src={banner_blob}   alt="banner-blob" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-gray-900 text-7xl">Collective Action</span>
          <span className="text-gray-700 font-normal text-6xl "> For A Sustainable Tomorrow</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-lg">
          Working together towards an eco-friendly future, with renewable
          practices for long-term health and prosperity.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700">
          Donate now
        </button>
      </div>
      
      {/* Right Image Section */}
      <div className="md:w-2/4 flex justify-center mt-8 md:mt-0 relative">
        <img
          src={homeimg}
          alt="Sustainable Action"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>

        <div className="w-40 absolute right-52 bottom-32">
        <img src={total_donations} className="w-full" alt="total-donation" />

        </div>
        <div className="w-40 absolute bottom-[6rem] right-[34rem]">
        <img src={join_our_Team } className="w-full" alt="joinourteam" />

        </div>
        <div className="w-10 absolute right-80 top-32 max-sm:top-[10%]">
        <img src={hand_price} className="w-full" alt="handprice" />

        </div>
        
    </section>
  );
};

export default HomeSection;
