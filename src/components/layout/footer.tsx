import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <section className="w-full bg-primary text-white py-12">
  <div className="max-w-7xl mx-auto px-5 lg:px-10">

    {/* Top */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1.2fr] gap-12">

      {/* Left */}
      <div className="flex flex-col gap-5">
        <img
          src="/assets/logo/logoSTKWhite.png"
          alt="Sena Tama Konsultindo"
          className="w-52 lg:w-64"
        />

        <p className="max-w-sm text-sm leading-7 text-gray-200">
          Professional legal and business consulting services for local and
          international companies.
        </p>
      </div>

      {/* Center */}
      <div className="flex flex-col gap-5">
        <h3 className="font-semibold text-lg">Quick Links</h3>

        <nav>
          <ul className="flex flex-col gap-3">

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
      </div>

      {/* Right */}
      <div className="flex flex-col gap-6">

        <h3 className="font-semibold text-lg">
          Contact Us
        </h3>

        <div className="flex gap-4">
          <Mail className="w-5 h-5 shrink-0 mt-1" />

          <p className="text-sm leading-7 break-all">
            konsulwithsenatama@gmail.com
          </p>
        </div>

        <div className="flex gap-4">
          <MapPin className="w-5 h-5 shrink-0 mt-1" />

          <p className="text-sm leading-7">
            Soho Capital Podomoro City Lt. 25 Unit 2508
            <br />
            Jl. Letjen S. Parman Kav. 28,
            <br />
            Grogol Petamburan,
            <br />
            Jakarta Barat 11470
          </p>
        </div>

      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-white/20 mt-12 pt-6 text-center">
      <p className="text-sm text-gray-300">
        © 2026 Sena Tama Konsultindo. All Rights Reserved.
      </p>
    </div>

  </div>
</section>
  );
}
