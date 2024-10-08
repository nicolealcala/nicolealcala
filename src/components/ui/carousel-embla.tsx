"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "./carousel.scss";

export function EmblaCarousel({ items }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        speed: 1,
        playOnInit: true,
        startDelay: 100,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="relative w-full wrapper">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item: any, i: string) => (
            <article key={i} className="embla__slide">
              <p className="text-sm text-[#f1f1f1]">{`"${item.feedback}"`}</p>

              <div className="flex items-center gap-3 mt-4">
                <Image
                  width={40}
                  height={40}
                  src={item.img}
                  alt="User image"
                  className={`size-12 rounded-full p-1 border-2 ${
                    item.color === "pink"
                      ? "border-soft-pink-300"
                      : "border-blue"
                  }`}
                />
                <div className="flex flex-col text-sm">
                  <p className="font-bold text-[#f1f1f1]">{item.name}&nbsp;</p>
                  <p className="text-[#e1e1e1]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center gap-x-4">
        <button className="rounded-full p-3 -left-10" onClick={scrollPrev}>
          <ChevronLeft />
        </button>
        <button className="rounded-full p-3" onClick={scrollNext}>
          <ChevronRight />
        </button>
      </div> */}
    </div>
  );
}
