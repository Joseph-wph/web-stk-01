import { UsersRound, ShieldCheck, ScrollText, Zap } from "lucide-react";

const why = [
  {
    title: "Experienced Professionals",
    description:
      "Our team consists of experts with extensive experience in legal and business matters.",
    icon: UsersRound,
  },
  {
    title: "Confidential & Reliable",
    description:
      "Your business & information are always protected with the highest confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Process",
    description:
      "We ensure clarity in every step so you always know the progress of your case.",
    icon: ScrollText,
  },
  {
    title: "Efficient Solutions",
    description:
      "We value your time & provide quick, accurate, & effective solutions.",
    icon: Zap,
  },
];

export default function Why() {
  return (
    <section className="w-full py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 overflow-hidden rounded-xl lg:rounded-4xl">
            <img
              src="/assets/image/meetingRoom.jpg"
              alt="Meeting Room"
              className="w-full h-64 md:h-80 lg:h-[550px] lg:w-[750px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10">
            {/* Heading */}
            <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              <p className="text-base font-semibold text-secondary">
                Why Choose Us
              </p>

              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-primary leading-tight">
                Your Trusted Partner
                <br />
                for Business Success
              </h2>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {why.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-open text-lg font-bold text-black mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-500 font-open-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
