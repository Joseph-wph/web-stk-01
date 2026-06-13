import { Building2, Scale, FileText, ShieldCheck, Globe } from "lucide-react";

const services = [
  {
    title: "Company Establishment",
    icon: Building2,
  },
  {
    title: "Legal Consulting",
    icon: Scale,
  },
  {
    title: "Business Licensing",
    icon: FileText,
  },
  {
    title: "Corporate Compliance",
    icon: ShieldCheck,
  },
  {
    title: "Visa & Immigration",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center bg-tertiary">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-[16px] font-semibold text-secondary">What We Do</p>
          <h1 className="font-heading font-bold text-3xl text-primary">
            Our Services
          </h1>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-30">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-5 p-6"
              >
                <Icon className="w-12 h-12 text-secondary" />

                <h3 className="font-semibold text-lg font-heading text-primary max-w-25">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
