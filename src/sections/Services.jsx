import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';

function Services() {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-gray-900">
            {/* Title and Subtitle */}
    
            <div className="px-5 text-center text-white max-w-md">
                <h1 className="text-3xl py-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">
                   Collaborate with brands and agencies to create impactful results.
                </h1>
            </div>

            {/* Services Button */}
            <button className="my-10 px-6 py-2 bg-gray-800 shadow-lg rounded-full text-white font-semibold">
                Services
            </button>

            {/* Service Cards */}
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl px-5">
                {/* Card 1 */}
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center">
                    <ComputerIcon style={{ fontSize: 40 }} className="mb-4  text-blue-900"/>
                    <h2 className="text-xl font-bold text-white">UX & UI</h2>
                    <p className="text-gray-400 text-center mt-2">
                        Designing interfaces that are intuitive, efficient, and enjoyable to use.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center">
                <AppShortcutIcon style={{ fontSize: 40 }} className="mb-4 text-blue-900" />
                <h2 className="text-xl font-bold text-white">Web & Mobile App</h2>
                    <p className="text-gray-400 text-center mt-2">
                        Transforming ideas into exceptional web and mobile app experiences.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center">
                    <DesignServicesIcon style={{ fontSize: 40 }} className="mb-4  text-blue-900" />
                    <h2 className="text-xl font-bold text-white">Design & Creative</h2>
                    <p className="text-gray-400 text-center mt-2">
                        Crafting visually stunning designs that connect with your audience.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center">
                    <CodeIcon style={{ fontSize: 40 }} className="mb-4  text-blue-900"/>
                    <h2 className="text-xl font-bold text-white">Development</h2>
                    <p className="text-gray-400 text-center mt-2">
                        Bringing your vision to life with the latest technology and design trends.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
