import React, { useState } from "react";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white">
      <div className="flex justify-between items-center  px-6 py-4">
        <div className="md:text-2xl font-bold">FELIX JOSEPH</div>

        <div>
          <ul className="hidden md:flex space-x-6 ">
            <li className=" hover:text-blue-300 cursor-pointer">
              <a href="#home">HOME</a>
            </li>
            <li className=" hover:text-blue-300 cursor-pointer">
              <a href="#aboutme">ABOUT ME</a>
            </li>
            <li className=" hover:text-blue-300 cursor-pointer">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className=" hover:text-blue-300 cursor-pointer">
              <a href="#codingprofiles">CODING PROFILES</a>
            </li>
            <li className=" hover:text-blue-300 cursor-pointer">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
