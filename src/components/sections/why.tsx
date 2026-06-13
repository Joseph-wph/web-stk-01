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
    <section className="w-full mx-auto lg:px-20 py-6 lg:py-10 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Image */}
        <div className="w-screen lg:w-200 lg:h-auto lg:rounded-4xl h-62 object-cover order-2 lg:order-1">
          <img src="/assets/image/meetingRoom.jpg" alt="Meeting Room" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center lg:items-start items-center gap-10 px-5 order-1 lg:order-2">
          <div className="flex flex-col justify-center items-center lg:items-start gap-5">
            <p className="text-[16px] font-semibold text-secondary">
              Why Choose Us
            </p>
            <h1 className="font-heading font-bold text-3xl text-primary">
              Your Tusted Partner
              <br />
              for Business Success
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {why.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="font-open text-lg font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 font-open-sans font-medium text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
