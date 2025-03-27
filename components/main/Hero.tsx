import React from "react";
import HeroContent from "../sub/HeroContent";

function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180   absolute top-[-600px]   md:top-[-340px] left-0 z-[1] w-full h-full  object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className=" h-1 mt-25 md:h-0 md:mt-0"></div>
      <HeroContent   />
    </div>
  );
}

export default Hero;
