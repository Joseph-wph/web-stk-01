import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  review: string;
  image: string;
}

export default function TestimonialCard({
  name,
  review,
  image,
}: TestimonialCardProps) {
  return (
    <div className="w-full max-w-[350px] lg:max-w-[450px] border-[3px] border-primary rounded-3xl p-5 bg-white h-full flex flex-col items-center justify-center">
      {/* Stars */}
      <div className="flex gap-1 text-yellow-400 text-lg mb-4">★★★★★</div>

      {/* Review */}
      <p className="text-gray-600 leading-relaxed mb-6 text-center">{review}</p>

      {/* User */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="font-semibold text-black">{name}</h3>
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
