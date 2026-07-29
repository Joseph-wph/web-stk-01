export default function About() {
  return (
    <section id="about" className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_620px] gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/assets/image/officeRoom.jpg"
              alt="Office Room"
              className="w-full h-64 md:h-96 lg:h-[500px] object-cover rounded-xl lg:rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-base font-semibold text-secondary mb-3">
              Who We Are
            </p>

            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary mb-6">
              About Us
            </h2>

            <p className="text-gray-600 leading-8 max-w-xl">
              Sena Tama Konsultindo is a professional consulting firm
              specializing in company establishment, legal advisory, visa
              services, and corporate compliance solutions.
              <br />
              <br />
              We are committed to delivering reliable, efficient, and strategic
              support for local and international businesses through a
              professional and transparent approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
