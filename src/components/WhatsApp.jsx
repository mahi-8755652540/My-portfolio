import React from "react";
import { whatsapp } from "../assets";

const WhatsApp = () => {
  return (
    <div className='fixed bottom-10 right-10 z-50 flex flex-col items-center gap-2'>
      <a
        href='https://wa.me/918755652540'
        target='_blank'
        rel='noreferrer'
        className='bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95'
      >
        <img
          src={whatsapp}
          alt='whatsapp'
          className='w-8 h-8 object-contain'
        />
      </a>
    </div>
  );
};

export default WhatsApp;
