import React from 'react';
import backgroundImage from '../assets/HomeBg.png';

function Home() {
    return (
        <div
            className="w-full h-screen bg-cover bg-center flex justify-end items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="max-w-md mx-8 md:mx-16 lg:mr-32 px-4 py-8 text-left ">
                <h2 className="text-3xl md:text-4xl font-bold text-white-800 mb-4">
                    Mann hai toh money hai
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    Manage finances with our full suite of personalized financial products
                </p>

                <div className="flex flex-wrap items-center justify-start gap-4 md:gap-8">
                    <div className="text-xl font-semibold text-gray-700">65 Million+ users</div>

                    <div className="hidden md:block h-6 border-r border-gray-300"></div>

                    <div className="text-xl font-semibold text-gray-700">
                        4.8★ <span className="text-gray-600">Google rating</span>
                    </div>

                    <div className="hidden md:block h-6 border-r border-gray-300"></div>

                    <div className="text-xl font-semibold text-gray-700">5 Cr+ downloads</div>
                </div>
            </div>
        </div>
    );
}

export default Home;    