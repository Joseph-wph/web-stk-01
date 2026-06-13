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
    <section className="w-full mx-auto lg:px-20 py-10 flex items-center justify-center bg-tertiary">
      <div className="flex flex-col justify-center items-center gap-10 px-5">
        {/* Text */}
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-[16px] font-semibold text-secondary">
            How We Work
          </p>
          <h1 className="font-heading font-bold text-3xl text-primary text-center max-w-xl lg:w-full">
            Simple Process, Clear Results
          </h1>
        </div>

        {/* Work */}
        <div className="grid grid-cols-1 lg:grid-flow-col gap-5">
          {why.map((item, index) => {
            const Icon = item.number;

            return (
              <div key={index} className="flex items-start gap-5">
                {/* Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 border-2 border-secondary text-secondary">
                  {item.number}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h3 className="font-open text-lg font-bold text-black">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 font-open-sans font-medium text-sm leading-relaxed max-w-50">
                    {item.description}
                  </p>
                </div>

                {/* Chevron */}
                {index !== why.length - 1 && (
                  <span className="hidden lg:flex text-secondary text-2xl">
                    <ChevronRight />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
