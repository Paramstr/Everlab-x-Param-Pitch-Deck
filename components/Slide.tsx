import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';

export const Slide: React.FC<SlideProps> = ({ children, className = "" }) => {
  return (
    <section className={`min-w-[100vw] h-screen snap-center flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-16 py-8 md:py-12 pb-32 md:pb-36 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-full max-w-7xl relative"
      >
        {children}
      </motion.div>
    </section>
  );
};