import React from 'react';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Contact() {
  return (
    <div className="w-full flex flex-col py-24 justify-center items-center bg-gray-900">
      {/* Icon Section */}
      <div className="flex justify-center items-center w-full h-full my-6">
        {/* Icon in a circle */}
        <div className="flex justify-center items-center w-32 h-32 bg-gray-800 rounded-full">
          <AlternateEmailIcon style={{ fontSize: '80px', color: 'white' }} />
        </div>
      </div>

      {/* Heading Section */}
      <div className="px-4 text-center text-white max-w-md">
        <h1 className="text-5xl py-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">
          Tell me about your next project
        </h1>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex gap-4 w-full max-w-md px-5">
        <Button 
          href="mailto:your-email@example.com?subject=Project Inquiry&body=Hello%2C%20I'd%20like%20to%20discuss%20a%20project."
          variant="outlined"
          color="primary"
          startIcon={<MailIcon />}
          className="flex-1 text-white border-white bg-blue-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          style={{ borderRadius: '12px' }}
        >
          Email
        </Button>

        <Button 
          href={`https://api.whatsapp.com/send/?phone=9876321998&text=Hello%2C%20I'd%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0`} 
          target="_blank" 
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
          startIcon={<WhatsAppIcon />}
          className="flex-1 text-white border-white bg-blue-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          style={{ borderRadius: '12px' }}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}

export default Contact;
