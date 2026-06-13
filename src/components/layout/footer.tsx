import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <section className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center bg-primary text-white font-sans">
      <div className="w-full p-5 flex flex-col justify-center gap-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Kiri */}
          <div className="flex flex-col items-start gap-5">
            <img
              src="/assets/logo/logoSTKWhite.png"
              alt="Sena Tama Konsultindo"
              className="w-[200px] lg:w-[280px]"
            />

            <p className="w-80 text-left text-[14px]">
              Professional legal and business consulting services for local and
              international companies.
            </p>
          </div>

          {/* Tengah */}
          <nav className="flex justify-center">
            <ul className="flex gap-10 lg:gap-20 items-center">
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

          {/* Kanan */}
          <div className="flex flex-col gap-4 lg:items-end">
            {/* Title */}
            <h2 className="text-[18px] font-light">Contact Us :</h2>

            {/* Email */}
            <div className="flex items-start gap-5">
              <Mail className="w-5 h-5 shrink-0 mt-0" />

              <p className="text-[12px] leading-relaxed">
                konsulwithsenatama@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5">
              <MapPin className="w-5 h-5 shrink-0 mt-0" />

              <p className="text-[12px] leading-relaxed">
                Soho Capital Podomoro City Lt. 25 Unit 2508
                <br />
                Jl. Letjen S. Parman, Kav. 28, Grogol Petamburan,
                <br />
                Jakarta Barat 11470
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bwah */}
        <div className="flex gap-2 justify-center items-center">
          <p className="text-[12px]">
            © 2026 Sena Tama Konsultindo. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
