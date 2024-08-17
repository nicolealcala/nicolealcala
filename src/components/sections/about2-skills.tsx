import React from "react";
import Section from "../ui/section-full";
import { Divider } from "@nextui-org/react";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const frontEnd = [
  { label: "HTML", icon: "https://www.svgrepo.com/show/349402/html5.svg" },
  { label: "CSS", icon: "https://www.svgrepo.com/show/349330/css3.svg" },
  {
    label: "JavaScript",
    icon: "https://www.svgrepo.com/show/349419/javascript.svg",
  },
  {
    label: "Sass",
    link: "https://sass-lang.com/",
    icon: "https://www.svgrepo.com/show/349502/sass.svg",
  },
  {
    label: "Bootstrap",
    link: "https://getbootstrap.com/docs/versions/",
    icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg",
  },
  {
    label: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png",
  },
  {
    label: "jQuery",
    link: "https://jquery.com/",
    icon: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
  },
  {
    label: "React.js",
    link: "https://react.dev/",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    label: "Next.js",
    link: "https://nextjs.org/",
    icon: "https://www.svgrepo.com/show/342062/next-js.svg",
  },
];

const backEnd = [
  {
    label: "PHP",
    link: "https://www.php.net/",
    icon: "https://www.svgrepo.com/show/349474/php.svg",
  },
  {
    label: "Node.js",
    link: "https://nodejs.org/en",
    icon: "https://nodejs.org/static/logos/nodejsStackedDark.svg",
  },
  {
    label: "Foundational C#",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    icon: "https://www.svgrepo.com/show/353622/c-sharp.svg",
  },
  {
    label: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    label: "MySQL",
    link: "https://www.mysql.com/",
    icon: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
  },
];

const tools = [
  {
    label: "Prisma",
    link: "https://www.prisma.io/",
    icon: "https://www.svgrepo.com/show/354210/prisma.svg",
  },
  {
    label: "phpMyAdmin",
    link: "https://www.phpmyadmin.net/",
    icon: "https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-ar21.svg",
  },
  {
    label: "Chrome DevTools",
    link: "https://developer.chrome.com/docs/devtools",
    icon: "https://www.svgrepo.com/show/378786/chrome-devtools.svg",
  },
  {
    label: "Github",
    link: "https://github.com/",
    icon: "https://www.svgrepo.com/show/512317/github-142.svg",
  },
  {
    label: "VS Code",
    link: "https://code.visualstudio.com/",
    icon: "https://www.svgrepo.com/show/452129/vs-code.svg",
  },
  {
    label: "Figma",
    link: "https://www.figma.com/",
    icon: "https://www.svgrepo.com/show/448222/figma.svg",
  },
];
const Skill = ({ skill }: any) => {
  return (
    <>
      {skill.link ? (
        <Link
          href={skill.link}
          target="_blank"
          className=" flex gap-x-2 rounded-full border border-slate-700 py-1 px-3 whitespace-nowrap hover:text-white hover:bg-slate-700 transition duration-300 ease-in-out cursor-pointer"
        >
          <div
            className={`relative x-auto ${
              skill.label === "Bootstrap"
                ? "w-7"
                : skill.label === "MongoDB"
                ? "w-3"
                : skill.label === "MySQL"
                ? "w-8"
                : skill.label === "phpMyAdmin"
                ? "w-12"
                : "w-6"
            } h-6`}
          >
            <Image src={skill.icon} fill alt={skill.label} />
          </div>
          <p>{skill.label}</p>
        </Link>
      ) : (
        <article className="flex gap-x-2 rounded-full border border-slate-700 py-1 px-3 whitespace-nowrap hover:text-white hover:bg-slate-700 transition duration-300 ease-in-out">
          <div className="relative w-6 h-6">
            <Image src={skill.icon} fill alt={skill.label} />
          </div>
          <p>{skill.label}</p>
        </article>
      )}
    </>
  );
};
const Skills = () => {
  return (
    <Section>
      <div className="container text-white flex flex-col">
        <h1 className="text-blue font-semibold mb-12">Skills & Tools</h1>
        <div className="flex flex-col md:flex-row gap-16 w-full text-slate-700">
          <div className="space-y-4 w-full md:w-1/2">
            <p>
              Ever since college, my core interests lie in{" "}
              <span className="text-pink">programming</span> and{" "}
              <span className="text-pink">design.</span> I feel most comfortable
              in <span className="text-pink">Front-end Web Development</span>,
              having dedicated nearly two years to refining my foundational
              skills. I have created projects for academic and non-academic
              purposes, utilizing the basic tools: HTML, CSS/Sass, and
              JavaScript/jQuery. I was also introduced to Bootstrap during my
              3rd year and used it for responsive web design.
            </p>
            <p>
              Although I am leaning more towards front-end development, I also
              have an experience on the{" "}
              <span className="text-pink">back-end</span> side. Our capstone
              project where I took part as the lead developer was developed
              using PHP and MySQL database.
            </p>
            <p>
              My current role as a&nbsp;
              <span className="text-pink">Full-stack web developer</span>&nbsp;
              required me to learn React.js and Next.js. This led me to dig deep
              into it and develop some projects &#x28;including this
              portfolio&#x29; alongside Tailwind CSS. It&apos;s really true when
              they say you&apos;ll gain most of your knowledge when you start
              working in the industry!
            </p>
            <p>
              Learning is a never-ending journey and I&apos;m just getting
              started. I am aiming to round out my skills set and eventually
              explore other technologies. My ultimate goal is to contribute
              innovative and impactful solutions, powered by my passion and
              commitment to continuous growth.
            </p>
          </div>

          <div className="flex flex-col gap-y-8 w-full md:w-1/2">
            <div className="flex flex-col gap-y-3">
              <p className="font-semibold">Front-end Web Development</p>
              <Divider />
              <div className="flex gap-2 flex-wrap">
                {frontEnd.map((skill, i) => (
                  <Skill key={i} skill={skill} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <p className="font-semibold">Back-end Web Development</p>
              <Divider />
              <div className="flex gap-3 flex-wrap">
                {backEnd.map((skill, i) => (
                  <Skill key={i} skill={skill} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <p className="font-semibold">Other Tools</p>
              <Divider />
              <div className="flex gap-3 flex-wrap">
                {tools.map((skill, i) => (
                  <Skill key={i} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
