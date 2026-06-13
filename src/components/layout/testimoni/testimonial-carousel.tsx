"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import TestimonialCard from "./testimoni-card";
import { testimonials } from "./data";

export default function Testimonial() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full py-10 bg-tertiary">
      <div className="w-full mx-auto px-5">
        {/* Carousel */}
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent className="ml-0 lg:-ml-4">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="min-w-0 basis-full lg:basis-1/3 lg:pl-4 flex justify-center"
              >
                <TestimonialCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-secondary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
