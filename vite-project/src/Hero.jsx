import React from "react";
import Feliximg from "./assets/Feliximg.jpg";
const Hero = () => {
  return (
    <div className="text-white text-center mt-20">
      <img
        src={Feliximg}
        alt="Unable to load"
        className="mx-auto rounded-full w-72 object-cover hover:scale-105 transition-transform duration-300"
      />
      <p className="pt-8">I am Felix Joseph, Aspiring Software Engineer</p>
      <p className="pt-4">Full Stack Development | Machine Learning | Cloud</p>
      <div>
        <button className="p-8">Resume</button>
        <button className="p-8">Connect With Me</button>
      </div>
    </div>
  );
};

export default Hero;
