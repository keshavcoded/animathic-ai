import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        <a href="#">
          <img src={logo} alt="logo" className="w-25 h-4 lg:w-35 lg:h-5" draggable={false} />
        </a>
        <div className="hidden md:flex space-x-6">
          <a
            href="#works"
            className="hover:text-neutral-200 transition-hover duration-300"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="hover:text-neutral-200 transition-hover duration-300"
          >
            Pricing
          </a>
          <a
            href="#testimonial"
            className="hover:text-neutral-200 transition-hover duration-300"
          >
            Testimonials
          </a>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#"
            className="hover:text-neutral-200  transition-hover duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition-hover duration-300"
          >
            Get a Demo
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 ransition-hover duration-300"
          >
            Start Free Trail
          </a>
        </div>
        {/* mobile screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/*  mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-neutral-200">
              Product
            </a>
            <a href="#" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#" className="hover:text-neutral-200">
              Resources
            </a>
            <a href="#" className="hover:text-neutral-200">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition text-center"
            >
              Get a Demo
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition text-center"
            >
              Start Free Trail
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
