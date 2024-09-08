import React from 'react';
import avinashImg from '../assets/avinassh.jpg';
import { Button } from '@mui/material';

function Landing() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900">
            <div className="relative flex flex-col items-center">
                {/* Container for Image and Overlay */}
                <div className="relative bg-white p-1 rounded-full shadow-lg">
                    <img
                        className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover"
                        src={avinashImg}
                        alt="avinash"
                    />
                    {/* Overlay Text */}
                    <div className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-1/3 sm:left-40 sm:transform -translate-x-1/2 -translate-y-1/2 overlay-text whitespace-nowrap">
                        <p className="text-white font-bold bg-custom-dark-gray px-3 py-2 rounded-2xl text-sm sm:text-base -rotate-12">
                            avinash kumar 👋🏼
                        </p>
                    </div>
                </div>

                {/* Container for Text */}
                <div className="mt-6 px-4 text-center text-white max-w-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">
                        A simple guy who codes for fun.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Landing;
