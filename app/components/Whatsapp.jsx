// pages/index.js veya istediğiniz sayfanın dosyası

"use client"
import React,{ useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [phoneNumber] = useState('+994776104888');

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div 
    className="font-custom  font-custom text-center  bg-linear-to-br from-gray-800 via-black to-gray-800 fixed bottom-7 right-7 flex w-[65px] h-[65px] items-center justify-center cursor-pointer hover:bg-green-500 hover:shadow-2xl hover:scale-110 transition-all duration-500 z-50 p-5 rounded-full text-white tems-center"
    onClick={openWhatsApp}>
    <FaWhatsapp size={70} />
  </div>
  
  );
};


export default WhatsAppButton;