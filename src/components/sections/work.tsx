import { ChevronRight } from "lucide-react";

const why = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen to your needs & understand your business goals.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We analyze your situation & provide the best solution for you.",
  },
  {
    number: "03",
    title: "Execution",
    description: "We handle the process with professionalism & efficiency.",
  },
  {
    number: "04",
    title: "Completion",
    description:
      "We ensure everything is completed & ready to support your business.",
  },
];

export default function Work() {
  return (
    <section className="w-full bg-tertiary py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base font-semibold text-secondary">How We Work</p>

          <h2 className="font-heading font-bold text-3xl text-primary max-w-xl">
            Simple Process, Clear Results
          </h2>
        </div>

        {/* Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          {why.map((item, index) => (
            <div key={index} className="flex items-start gap-5 h-full">
              {/* Number */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 border-2 border-secondary text-secondary font-semibold">
                {item.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-open text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 font-open-sans text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              {index !== why.length - 1 && (
                <ChevronRight className="hidden xl:block shrink-0 text-secondary mt-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
