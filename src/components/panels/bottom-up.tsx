"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";

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
  onOpen: () => void; // Added onOpen
  onClose: () => void; // Added onClose
  isOpen: boolean; // Added isOpen to control drawer visibility
}

const Project = ({
  title,
  details,
  period,
  techStack,
  links,
  category,
  image,
  isOpen,
  onOpen,
  onClose,
}: ProjectProp) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom"
      size="5xl"
      classNames={{
        base: "h-[90%] !bg-white opacity-100",
        header: "border border-b-1 h-16",
        closeButton: "right-4 top-4 lg:right-8 lg:top-3 text-2xl",
        body: "py-6 px-24",
      }}
    >
      <DrawerContent>
        {(onClose: any) => (
          <>
            {/* <DrawerHeader className="flex flex-col gap-1">
              {project.title || "DreamLabs"}
            </DrawerHeader> */}
            <DrawerBody>
              <h2 className="font-bold">{title}</h2>
              <p>{details}</p>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Project;
