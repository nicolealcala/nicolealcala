"use client";
import React, { useEffect, useState } from "react";
import Section from "../shared-ui/section-full";
import Image from "next/image";
import projects from "@/lib/data/projects";
import "./sections.scss";
import { Eye, Link as LinkIcon, Figma, Github } from "lucide-react";
import { Button, Link } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpProps } from "@/lib/motion/props";

interface LinksObject {
  figma?: string;
  github?: string;
  hosted?: string;
}

interface ProjectProp {
  title: string;
  details: string;
  period: string;
  techStack: string[];
  links: LinksObject;
  category: string[];
  image: string;
}

const ProjectBox = (project: ProjectProp) => {
  return (
    <div className="project-box relative rounded overflow-hidden outline outline-gray-400 outline-1 outline-offset-2">
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
        <div className="text-xs text-center space-x-2 mt-2 text-white">
          {project.techStack.map((stack, i) => (
            <span key={i}>
              {stack} {i === project.techStack.length - 1 ? null : "|"}
            </span>
          ))}
        </div>
        <div className="flex gap-x-6">
          <Button
            radius="full"
            isIconOnly
            className="bg-transparent text-white hover:bg-soft-pink-300 hover:!opacity-100 hover:!text-white"
          >
            <Eye />
          </Button>
          {project.links.hasOwnProperty("github") ? (
            <Button
              as={Link}
              href={project.links.github}
              radius="full"
              isExternal
              isIconOnly
              className="bg-transparent text-white hover:bg-soft-pink-300 hover:!opacity-100 hover:!text-white"
            >
              <Github />
            </Button>
          ) : null}
          {project.links.hasOwnProperty("figma") ? (
            <Button
              as={Link}
              href={project.links.figma}
              radius="full"
              isExternal
              isIconOnly
              className="bg-transparent text-white hover:bg-soft-pink-300 hover:!opacity-100 hover:!text-white"
            >
              <Figma />
            </Button>
          ) : null}
          {project.links.hasOwnProperty("hosted") ? (
            <Button
              as={Link}
              href={project.links.hosted}
              radius="full"
              isExternal
              isIconOnly
              className="bg-transparent text-white hover:bg-soft-pink-300 hover:!opacity-100 hover:!text-white"
            >
              <LinkIcon />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const ProjectsGallery = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [grid, setGrid] = useState(projects);
  const tabs = ["All", "Development", "Design"];

  useEffect(() => {
    if (selectedTab === "Development") {
      setGrid(projects.filter((p) => p.category.includes("development")));
    }

    if (selectedTab === "Design")
      setGrid(projects.filter((p) => p.category.includes("design")));

    if (selectedTab === "All") setGrid(projects);
  }, [selectedTab]);

  return (
    <Section className="bg-tear">
      <motion.div {...fadeInUpProps} className="w-full">
        <div className="contaner flex flex-col gap-y-12 w-full">
          <div className="flex justify-between">
            <h1 className="text-pink-400 font-semibold">Projects Gallery</h1>
            <ul className="flex gap-x-6 text-white">
              {tabs.map((item, i) => (
                <li
                  key={i}
                  className={`text-center cursor-pointer ${
                    item === selectedTab
                      ? "text-white font-medium"
                      : "text-gray-300"
                  }`}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                  {item === selectedTab ? (
                    <motion.div
                      className="bg-pink h-1 px-4"
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {grid.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectBox key={i} {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ProjectsGallery;
