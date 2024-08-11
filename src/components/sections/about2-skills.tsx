import React from "react";
import Section from "../ui/section-full";
import { Divider } from "@nextui-org/react";
import { Check } from "lucide-react";
import Link from "next/link";

const frontEnd = [
  { label: "HTML", icon: <Check /> },
  { label: "CSS", icon: <Check /> },
  { label: "JavaScript", icon: <Check /> },
  { label: "Sass", link: "https://sass-lang.com/", icon: <Check /> },
  {
    label: "Bootstrap",
    link: "https://getbootstrap.com/docs/versions/",
    icon: <Check />,
  },
  { label: "Tailwind", link: "https://tailwindcss.com/", icon: <Check /> },
  { label: "jQuery", link: "https://jquery.com/", icon: <Check /> },
  { label: "React.js", link: "https://react.dev/", icon: <Check /> },
  { label: "Next.js", link: "https://nextjs.org/", icon: <Check /> },
];

const backEnd = [
  { label: "PHP", link: "https://www.php.net/", icon: <Check /> },
  { label: "Node.js", link: "https://nodejs.org/en", icon: <Check /> },
  {
    label: "Foundational C#",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    icon: <Check />,
  },
  { label: "MongoDB", link: "https://www.mongodb.com/", icon: <Check /> },
  { label: "MySQL", link: "https://www.mysql.com/", icon: <Check /> },
];

const tools = [
  { label: "Prisma", link: "https://www.prisma.io/", icon: <Check /> },
  { label: "Mongoose", link: "https://mongoosejs.com/", icon: <Check /> },
  { label: "phpMyAdmin", link: "https://www.phpmyadmin.net/", icon: <Check /> },
  {
    label: "Chrome DevTools",
    link: "https://developer.chrome.com/docs/devtools",
    icon: <Check />,
  },
  { label: "Github", link: "https://github.com/", icon: <Check /> },
  { label: "VS Code", link: "https://code.visualstudio.com/", icon: <Check /> },
  { label: "Figma", link: "https://www.figma.com/", icon: <Check /> },
];
const Skill = ({ skill }: any) => {
  return (
    <>
      {skill.link ? (
        <Link
          href={skill.link}
          target="_blank"
          className="flex gap-x-2 rounded-full border border-slate-700 py-1 px-3 whitespace-nowrap hover:text-white hover:bg-slate-700 transition duration-300 ease-in-out cursor-pointer"
        >
          {skill.icon}
          <p>{skill.label}</p>
        </Link>
      ) : (
        <article className="flex gap-x-2 rounded-full border border-slate-700 py-1 px-3 whitespace-nowrap hover:text-white hover:bg-slate-700 transition duration-300 ease-in-out">
          {skill.icon}
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
        <div className="flex gap-x-16 w-full text-slate-700">
          <div className="space-y-4 w-1/2">
            <h1 className="text-blue font-semibold mb-12">Skills & Tools</h1>
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
              portfolio&#x29; alongside Tailwind CSS. It's really true when they
              say you'll gain most of your knowledge when you start working in
              the industry!
            </p>
            <p>
              Learning is a never-ending journey and I'm just getting started. I
              am aiming to round out my skills set and eventually explore other
              technologies. My ultimate goal is to contribute innovative and
              impactful solutions, powered by my passion and commitment to
              continuous growth.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-y-8 w-1/2">
            <div className="flex flex-col gap-y-4">
              <p className="font-semibold">Front-end Web Development</p>
              <Divider />
              <div className="flex gap-2 flex-wrap">
                {frontEnd.map((skill, i) => (
                  <Skill key={i} skill={skill} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <p className="font-semibold">Back-end Web Development</p>
              <Divider />
              <div className="flex gap-3 flex-wrap">
                {backEnd.map((skill, i) => (
                  <Skill key={i} skill={skill} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
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
