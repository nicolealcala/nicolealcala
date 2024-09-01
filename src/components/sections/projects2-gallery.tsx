import React from "react";
import Section from "../ui/section-full";
import Image from "next/image";
import projects from "@/lib/data/projects";
import "./sections.scss";

interface ProjectProp {
  title: string;
  details: string;
  period: string;
  techStack: string[];
  links: Array<Object>;
  category: string[];
  image: string;
}
const ProjectBox = (project: ProjectProp) => {
  return (
    <div className="project-box relative rounded overflow-hidden outline outline-white outline-1 outline-offset-2">
      <Image
        src={project.image}
        alt={project.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="blur-overlay flex flex-col gap-y-1.5 items-center justify-center w-full h-full z-20 absolute inset-0 backdrop-blur-sm p-2">
        <p className="text-xs text-center text-white">
          {project.period.toUpperCase()}
        </p>
        <h1 className="font-bold text-center text-white">{project.title}</h1>
        <p className="text-sm text-center text-white">{project.details}</p>
        <div className="text-sm text-center space-x-2 mt-2 text-white">
          {project.techStack.map((stack, i) => (
            <span key={i}>
              {stack} {i === project.techStack.length - 1 ? null : "|"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsGallery = () => {
  return (
    <Section className="bg-black">
      <div className="contaner flex flex-col gap-y-12 w-full">
        <div className="flex justify-between">
          <h1 className="text-pink-400 font-semibold">Projects Gallery</h1>
          <p className="text-white flex gap-x-6 items-center">
            <span>All</span>
            <span>Development</span>
            <span>Design</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectBox key={i} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsGallery;
