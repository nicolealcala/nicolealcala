// motionProps.js
export const fadeInUpProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    delay: 0.5,
  },
};
