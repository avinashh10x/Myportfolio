import React, { useState } from 'react';
import { LinkedIn, GitHub, Instagram, MailOutline as MailOutlineIcon } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import MenuIcon from '@mui/icons-material/Menu';
import MyResume from '../assets/MyResume.pdf';
import { Button, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';


function Header() {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Function to handle resume download
    const handleResumeDownload = () => {
        setSnackbarMessage('Resume download started!');
        setOpenSnackbar(true);
    };

    // Function to copy email to clipboard
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('a252550k@gmail.com')
            .then(() => {
                setSnackbarMessage('Email copied to clipboard!');
                setOpenSnackbar(true);
            })
            .catch((error) => {
                setSnackbarMessage('Failed to copy email!');
                setOpenSnackbar(true);
            });
    };

    // Close Snackbar
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    // Toggle drawer open state
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <div className="w-full bg-transparent p-6 sm:p-20 absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 text-white">
                {/* Drawer Button */}
                <div className="block w-full sm:hidden flex justify-between items-center p-2">
                    {/* Hamburger Menu Icon */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Resume Button */}
                    <a
                        href={MyResume}
                        download="MyResume.pdf"
                        onClick={handleResumeDownload}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ borderRadius: '12px' }}
                            className="text-white border-white bg-blue-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                        >
                            Resume
                        </Button>
                    </a>

                    {/* Drawer Component */}
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: '70vw',
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                padding: '16px',
                            },
                        }}
                    >
                        {/* Drawer Heading */}
                        <div className="text-center my-6">
                            <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
                                Connect with Me
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Let's build something awesome together.
                            </Typography>
                        </div>

                        <div className="flex flex-col items-center space-y-6">
                            {/* Social Media Icons with Text */}
                            <div className="flex flex-col items-center">
                                <IconButton
                                    href="https://www.linkedin.com/in/avinash-519616249/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-white hover:text-blue-500 transition duration-300"
                                    sx={{ fontSize: '30px', color: 'white' }}
                                >
                                    <LinkedIn />
                                </IconButton>
                                <Typography variant="caption" sx={{ color: 'white' }}>
                                    LinkedIn
                                </Typography>
                            </div>

                            {/* GitHub Icon with Text */}
                            <div className="flex flex-col items-center">
                                <IconButton
                                    href="https://github.com/avinashh10x"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="text-white hover:text-gray-400 transition duration-300"
                                    sx={{ fontSize: '30px', color: 'white' }}
                                >
                                    <GitHub />
                                </IconButton>
                                <Typography variant="caption" sx={{ color: 'white' }}>
                                    GitHub
                                </Typography>
                            </div>

                            {/* Instagram Icon with Text */}
                            <div className="flex flex-col items-center">
                                <IconButton
                                    href="https://www.instagram.com/___avinash___"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-white hover:text-pink-500 transition duration-300"
                                    sx={{ fontSize: '30px', color: 'white' }}
                                >
                                    <Instagram />
                                </IconButton>
                                <Typography variant="caption" sx={{ color: 'white' }}>
                                    Instagram
                                </Typography>
                            </div>

                            {/* Mail Icon with Text */}
                            <div className="flex flex-col items-center">
                                <IconButton
                                    href="mailto:a252550k@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Mail"
                                    className="text-white hover:text-red-500 transition duration-300"
                                    sx={{ fontSize: '30px', color: 'white' }}
                                >
                                    <MailIcon />
                                </IconButton>
                                <Typography variant="caption" sx={{ color: 'white' }}>
                                    Mail
                                </Typography>
                            </div>

                            {/* Resume Button */}
                            <a
                                href={MyResume}
                                download="MyResume.pdf"
                                onClick={handleResumeDownload}
                            >
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    style={{ borderRadius: '12px' }}
                                    className="text-white border-white bg-blue-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                                >
                                    Resume
                                </Button>
                            </a>
                        </div>
                    </Drawer>
                </div>


                {/* Desktop Content */}
                <div className="hidden sm:flex items-center space-x-3">
                    <div className="mx-3 flex items-center cursor-pointer" onClick={copyEmailToClipboard}>
                        <MailOutlineIcon style={{ fontSize: '24px', color: 'white' }} />
                        <p className="mx-2">a252550k@gmail.com</p>
                    </div>

                    {/* Buttons */}
                    <Button
                        onClick={copyEmailToClipboard}
                        variant="outlined"
                        color="primary"
                        style={{ borderRadius: '12px' }}
                        className="text-white border-white bg-blue-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                    >
                        Copy
                    </Button>
                    <a
                        href={MyResume}
                        download="MyResume.pdf"
                        onClick={handleResumeDownload}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ borderRadius: '12px' }}
                            className="text-white border-white bg-blue-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                        >
                            Resume
                        </Button>
                    </a>
                </div>

                {/* Right Side Content */}
                <div className="hidden sm:text-right sm:flex">
                    <p className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/avinash-519616249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition duration-300 "
                        >
                            LinkedIn
                        </a>
                        <span>/</span>
                        <a
                            href="https://github.com/avinashh10x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition duration-300 "
                        >
                            Github
                        </a>
                        <span>/</span>
                        <a
                            href="https://www.instagram.com/___avinash___"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition duration-300 "
                        >
                            Instagram
                        </a>
                    </p>
                </div>
            </div>

            {/* Snackbar for notifications */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Header;
