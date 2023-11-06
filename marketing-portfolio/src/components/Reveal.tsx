import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import React from "react";

interface RevealProps {
  children: JSX.Element;
}

const Reveal = ({ children }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
