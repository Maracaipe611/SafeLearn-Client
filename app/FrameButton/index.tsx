"use client";
import "@/app/globals.css";
import { useState } from 'react';

export default function FrameButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen && (
        <div className="absolute bottom-0 shadow-xl shadow-slate-700 right-0 mb-20 mr-10 bg-gray-50 h-136 w-8/12 z-50 overflow-hidden rounded-xl border-4 border-gray-800">
          <div className="container mx-auto p-4">
            <iframe
              className="w-full h-screen"
              src={"http://localhost:3000/ajuda"}
              title="Frame do Site"
            ></iframe>
          </div>
        </div>
      )}
    <div className="absolute bottom-0 right-0 m-2">
      <button
        className="bg-red-600 border-2 border-yellow-600 text-center flex justify-center text-white font-bold p-4 h-14 w-14 rounded-full"
        onClick={handleClick}
      >
        S.O.S
      </button>
      
    </div>
    </>
  );
};
