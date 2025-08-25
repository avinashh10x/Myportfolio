import React from 'react';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material'; // Import MUI icons
import { IconButton } from '@mui/material'; // Import IconButton for clickable icons

function Footer() {
    return (
        <div className="w-full bg-gray-900 px-4 sm:px-20 py-6 sm:py-10"> {/* Adjust padding for smaller screens */}
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 text-white">
                {/* Left Side Content */}
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p>© 2024 All rights reserved</p>
                </div>

                {/* Right Side Content */}
                <div className="flex flex-wrap justify-center sm:justify-end">
                    {/* Social Media Links */}
                    <div className="hidden sm:flex gap-4 mb-4 sm:mb-0">
                        <a
                            href="https://www.linkedin.com/in/avinash-519616249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition duration-300"
                        >
                            LinkedIn
                        </a>
                        <span>/</span>
                        <a
                            href="https://github.com/avinashh10x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition duration-300"
                        >
                            Github
                        </a>
                        <span>/</span>
                        <a
                            href="https://www.instagram.com/avinashh10x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition duration-300"
                        >
                            Instagram
                        </a>
                    </div>

                    {/* MUI Icons for Mobile */}
                    <div className="flex sm:hidden gap-4">
                        <IconButton
                            href="https://www.linkedin.com/in/avinash-519616249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-white hover:text-blue-500 transition duration-300"
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            href="https://github.com/avinashh10x"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-white hover:text-blue-500 transition duration-300"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            href="https://www.instagram.com/avinashh10x"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-white hover:text-blue-500 transition duration-300"
                        >
                            <Instagram />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
