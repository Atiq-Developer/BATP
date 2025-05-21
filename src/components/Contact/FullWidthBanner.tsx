import React from "react";
import Image from "next/image";

interface FullWidthBannerProps {
  imageUrl: string;
  text: string;
//   subtext?: string;
}

const FullWidthBanner: React.FC<FullWidthBannerProps> = ({ imageUrl, text, }) => {
  return (
    <div className="relative w-full h-[400px] ">
      {/* Background Image */}
      <Image 
        src={imageUrl} 
        alt="Banner" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 w-full h-full"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">{text}</h1>
        {/* {subtext && <p className="text-lg md:text-2xl mt-2">{subtext}</p>} */}
      </div>
    </div>
  );
};

export default FullWidthBanner;
