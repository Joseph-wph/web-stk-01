export default function Hero() {
  const phoneNumber = "6281283807770";

  const message =
    "Hello Sena Tama Konsultindo, I would like to ask about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/image/heroSection.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end">
        <div className="max-w-7xl mx-auto w-full px-5 lg:px-10 pb-10 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[1.7fr_1fr] gap-8 xl:gap-16 items-end">
            {/* Left */}
            <div>
              <h1 className="font-heading font-bold text-white text-4xl md:text-5xl xl:text-7xl leading-tight">
                Smart Solutions,
                <br />
                Trusted Knowledge
              </h1>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start gap-6">
              <p className="text-white text-base lg:text-lg leading-8">
                Professional assistance for company establishment, visa
                services, legal consulting, and corporate compliance.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 transition-colors px-7 py-3 rounded-full text-white font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
