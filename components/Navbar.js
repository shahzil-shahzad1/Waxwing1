"use client"
import Link from "next/link"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navlinks, setnavlinks] = useState([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-[5] top-0 left-0 w-full bg-black bg-opacity-10 backdrop-blur-lg text-white py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="flex gap-2 items-center h-fit w-fit">
          <img src="/logo.png" alt="" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
          <h1 className="text-3xl text-[aqua] font-semibold max-md:text-2xl max-sm:text-[1.3rem]">Waxwing</h1>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden inline">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#000211] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only text-white">Open main menu</span>
            {isOpen ? (
              <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
            ) : (
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_429_11066)">
                  <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_429_11066">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
                  </clipPath>
                </defs>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navlinks.map((item, index) => (
            <li key={index} className="relative group list-none">
              <Link
                href={item.path}
                className="hover:text-[aqua] font-semibold text-[16px] transition-all duration-300 text-lg relative pb-1"
              >
                {item.name}
                {/* Underline Animation */}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[aqua] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#010312] bg-opacity-80 absolute top-full left-0 w-full py-4 flex flex-col items-center">
          {navlinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block py-2 px-4 text-lg hover:text-[aqua]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar