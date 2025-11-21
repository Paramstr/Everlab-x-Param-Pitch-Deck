import React from 'react';
import { Slide } from './Slide';
import { Logo } from './Logo';

export const IntroSlide = () => {
  return (
    <Slide className="bg-transparent">
      <div className="flex flex-col h-full justify-center items-center relative">
        <div className="text-center space-y-6 z-10">
            <div className="mx-auto w-48 md:w-64 h-auto">
                <Logo className="w-full h-full text-stone-900" />
            </div>
            <p className="font-sans font-light text-xl md:text-2xl text-stone-400 tracking-wide">
                A new product perspective
            </p>
        </div>
      </div>
    </Slide>
  );
};