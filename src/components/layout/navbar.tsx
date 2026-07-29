"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "6281807597477";

  const message =
    "Hello Optimal Tax Solutions, I would like to ask about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#home" className="shrink-0">
            <img
              src="/assets/logo/logoStk.png"
              alt="Sena Tama Konsultindo"
              className="w-44 xl:w-56"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-12 text-primary font-semibold">
              <li>
                <a
                  href="#home"
                  className="hover:text-secondary transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-secondary transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-secondary transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#testimonial"
                  className="hover:text-secondary transition-colors"
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center shrink-0 bg-primary hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            Contact Us
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-5 py-6">
            <ul className="flex flex-col gap-5 text-primary font-semibold">
              <li>
                <a href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>

              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </a>
              </li>

              <li>
                <a href="#testimonial" onClick={() => setIsOpen(false)}>
                  Testimonial
                </a>
              </li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center bg-primary hover:bg-blue-700 text-white py-3 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
