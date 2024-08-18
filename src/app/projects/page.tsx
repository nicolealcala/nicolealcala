import FeaturedProject from "@/components/sections/projects1-featured";
import ProjectsGallery from "@/components/sections/projects2-gallery";
import React from "react";

const Projects = () => {
  return (
    <main className="flex flex-col">
      <FeaturedProject />
      <ProjectsGallery />
    </main>
  );
};

export default Projects;
