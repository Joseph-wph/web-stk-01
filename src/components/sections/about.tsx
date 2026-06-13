export default function About() {
  return (
    <section id="about" className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        {/* Image */}
        <img
          src="/assets/image/officeRoom.jpg"
          alt="Office Room"
          className="w-screen lg:w-200 lg:h-auto lg:rounded-4xl h-62 object-cover order-2 lg:order-1"
        />

        {/* Text */}
        <div className="flex flex-col justify-center lg:items-start items-center gap-5 px-5 order-1 lg:order-2">
          <p className="text-[16px] font-semibold text-secondary">Who We Are</p>
          <h1 className="font-heading font-bold text-3xl text-primary">
            About Us
          </h1>
          <p className="leading-loose lg:w-xl">
            Sena Tama Konsultindo is a professional consulting firm specializing
            in company establishment, legal advisory, visa services, and
            corporate compliance solutions.
            <br />
            <br />
            We are committed to delivering reliable, efficient, and strategic
            support for local and international businesses through a
            professional and transparent approach.
          </p>
        </div>
      </div>
    </section>
  );
}
