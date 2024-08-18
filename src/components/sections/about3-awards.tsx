import React from "react";
import Section from "../ui/section-full";
import { ChevronsRight } from "lucide-react";
import "./sections.scss";
import Link from "next/link";
import Image from "next/image";

const awards = [
  {
    title: "WPH Code Bootcamp",
    description: "WPH Digital Pte Ltd",
    date: "December 2023",
    image: "/images/awards/wph-bootcamp.png",
  },
  {
    title: "Magna Cum Laude",
    description:
      "Polytechnic University of the Philippines - Sto. Tomas Campus",
    date: "Class of 2023",
    image: "/images/awards/pup-mcl.jpg",
  },
  {
    title: "DOST Academic Excellence Award",
    description: "Department of Science & Technology - CALABARZON",
    date: "October 2023",
    image: "/images/awards/dost-excellence.png",
  },
  {
    title: "Academic Achiever, Rank 1 (BSIT)",
    description:
      "Polytechnic University of the Philippines - Sto. Tomas Campus",
    date: "A.Y. 2022-2023",
    image: "/images/awards/pup-r1.png",
  },
  {
    title: "President's List, 8 semesters",
    description:
      "Polytechnic University of the Philippines - Sto. Tomas Campus",
    date: "2019-2023",
    image: "/images/awards/pup-pl.jpg",
  },
  {
    title: "Academic Achiever, Rank 2 (BSIT)",
    description:
      "Polytechnic University of the Philippines - Sto. Tomas Campus",
    date: "A.Y. 2020-2021",
    image: "/images/awards/pup-r2.png",
  },
  {
    title: "S&T Undergraduate Scholarship, RA 7687",
    description:
      "Department of Science & Technology - Science Eduation Institute",
    date: "2019-2023",
    image: "/images/awards/dost-scholarship.png",
    link: "https://sei.dost.gov.ph/wp-content/uploads/2024/01/2019DOSTSEIQualifiers.pdf",
  },
];

const Awards = () => {
  return (
    <Section className="bg-black">
      <div className="container text-white flex flex-col gap-y-12">
        <h1 className="text-pink font-semibold">Awards & Recognitions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 w-full">
          {awards.map((award, i) => (
            <div
              key={i}
              className="relative bg-yellow-900 w-full h-[350px] max-w-[400px] max-h-[350px] place-self-center rounded overflow-hidden"
            >
              <div className="overlay p-6 absolute top-0 left-0 w-full h-[350px] max-w-[400px] max-h-[350px] z-20 opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex flex-col gap-y-1 items-center justify-center">
                <h2 className="text-center font-semibold">{award.title}</h2>
                <p className="text-center mt-2">{award.description}</p>
                <div className="flex gap-x-2 items-center">
                  <p className="text-center text-sm italic">{award.date}</p> |
                  {award.link && (
                    <Link
                      href={award.link}
                      target="_blank"
                      className="flex gap-x-1 items-center text-sm italic"
                    >
                      View official list <ChevronsRight />
                    </Link>
                  )}
                </div>
              </div>
              <Image
                fill
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
