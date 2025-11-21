import React from 'react';
import { motion } from 'framer-motion';

export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-stone-50">
      {/* Fluid Gradient Orbs - Increased Opacity and Saturation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-blue-400 mix-blend-multiply filter blur-[100px] opacity-60"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -60, 0],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-400 mix-blend-multiply filter blur-[100px] opacity-60"
      />
       <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-300 mix-blend-multiply filter blur-[100px] opacity-60"
      />
      
      {/* Lighter texture overlay to let colors through */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[5px]"></div>
    </div>
  );
};