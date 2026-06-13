import ContactForm from "@/components/layout/contactForm/contactForm";

export default function Form() {
  return (
    <section className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center bg-tertiary">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-[16px] font-semibold text-secondary">Contact Us</p>
          <h1 className="font-heading font-bold text-3xl text-primary">
            Get In Touch
          </h1>
        </div>

        {/* Testimoni */}
        <ContactForm />
      </div>
    </section>
  );
}