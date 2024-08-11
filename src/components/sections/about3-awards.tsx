import React from "react";
import Section from "../ui/section-full";
import awards from "@/lib/data/awards";
import Image from "next/image";
import "./sections.scss";

const Awards = () => {
  return (
    <Section className="bg-black">
      <div className="container text-white flex flex-col gap-y-12">
        <h1 className="text-pink font-semibold">Awards & Recognitions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {awards.map((award, i) => (
            <div
              key={i}
              className="relative bg-yellow-900 w-full h-[350px] max-w-[400px] max-h-[350px] place-self-center rounded overflow-hidden"
            >
              <div className="overlay absolute top-0 left-0 w-full h-[350px] max-w-[400px] max-h-[350px] z-20 opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex flex-col gap-y-1 items-center justify-center">
                <h2 className="font-semibold">{award.title}</h2>
                <p className="text-center mt-2">{award.description}</p>
                <p className="text-sm italic">{award.date}</p>
              </div>
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Awards;
