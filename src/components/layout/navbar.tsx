"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="w-full mx-auto px-6 lg:px-20 py-6 lg:py-10 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/assets/logo/logoStk.png"
          alt="Sena Tama Konsultindo"
          className="w-50 lg:w-70"
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-20 text-primary">
            <li className="hover:text-blue-500 font-bold cursor-pointer">
              <a href="#home">Home</a>
            </li>

            <li className="hover:text-blue-500 font-bold cursor-pointer">
              <a href="#about">About</a>
            </li>

            <li className="hover:text-blue-500 font-bold cursor-pointer">
              <a href="#services">Services</a>
            </li>

            <li className="hover:text-blue-500 font-bold cursor-pointer">
              <a href="#testimonial">Testimoni</a>
            </li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-primary hover:bg-blue-700 px-6 py-2 text-white rounded-full font-medium cursor-pointer">
          Contact Us
        </button>

        {/* Burger Button */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-6">
          <ul className="flex flex-col gap-6 text-primary font-bold">
            <li className="hover:text-blue-300 font-bold cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-300 font-bold cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-300 font-bold cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-blue-300 font-bold cursor-pointer">
              <a href="#testimonial">Testimoni</a>
            </li>
          </ul>

          <button className="mt-6 w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-full">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
