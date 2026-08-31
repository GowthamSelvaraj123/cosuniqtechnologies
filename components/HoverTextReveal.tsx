"use client";

import React from "react";
import { motion } from "framer-motion";

interface HoverTextRevealProps {
  text: string;
  className?: string;
}

export default function HoverTextReveal({ text, className = "" }: HoverTextRevealProps) {
  return (
    <motion.span
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        variants={{
          rest: { y: 0 },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        style={{ display: "block", whiteSpace: "nowrap" }}
      >
        {text}
      </motion.span>
      <motion.span
        variants={{
          rest: { y: "100%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        style={{ position: "absolute", left: 0, top: 0, display: "block", width: "100%", textAlign: "center", whiteSpace: "nowrap" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
}
