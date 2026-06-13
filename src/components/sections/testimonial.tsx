import TestimonialCarousel from "@/components/layout/testimoni/testimonial-carousel";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-[16px] font-semibold text-secondary">Testimoni</p>

          <h1 className="font-heading font-bold text-3xl text-primary">
            What They Say About Us
          </h1>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
