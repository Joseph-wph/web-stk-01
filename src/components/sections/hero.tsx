export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/image/heroSection.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full lg:h-47 h-100 bg-linear-to-t from-black to-transparent lg:bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex items-end lg:px-20 px-5 py-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-start gap-5 text-white w-full">
          <h1 className="lg:text-6xl text-4xl font-heading font-bold max-w-2xl">
            Smart Solutions, Trusted Knowledge
          </h1>

          <div className="flex flex-col justify-center items-start gap-5">
            <p className="text-base lg:text-lg max-w-lg">
              Professional assistance for company establishment, visa services,
              legal consulting, and corporate compliance.
            </p>

            <a
              href="https://wa.me/6281807597477?text=Hello%20Sena%20Tama%20Konsultindo,%20I%20would%20like%20to%20ask%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-blue-700 px-6 py-2 text-white rounded-full font-medium cursor-pointer w-fit"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
