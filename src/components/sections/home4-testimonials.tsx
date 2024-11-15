"use client";
import React from "react";
import Section from "../shared-ui/section-full";
import { EmblaCarousel } from "../shared-ui/carousel-embla";
import Feedback from "@/lib/data/testimonials";
import { motion } from "framer-motion";
import { fadeInUpProps } from "@/lib/motion/props";

const Testimonials = () => {
  return (
    <Section className="bg-[#eff3fc] !px-0 " id="last">
      <motion.div {...fadeInUpProps} className="w-full">
        <div className="container flex flex-col items-center gap-y-14">
          <div className="flex flex-col gap-y-4 items-center">
            <p
              className={`text-3xl md:text-5xl font-bold text-slate-800 text-center`}
            >
              Excellence is a continuous journey
            </p>
            <p
              className={`text-center max-w-[90%] md:max-w-[60%] text-slate-600`}
            >
              and your feedback is the fuel that keeps me striving for it. It
              empowers me to embrace challenges, learn from experiences, and
              continuously raise the bar.
            </p>
          </div>
          <EmblaCarousel items={Feedback} />
        </div>
      </motion.div>
    </Section>
  );
};

export default Testimonials;
