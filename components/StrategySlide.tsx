import React from 'react';
import { Slide } from './Slide';
import { SubscriptionCarousel } from './SubscriptionCarousel';

export const StrategySlide = () => {
  return (
    <Slide className="bg-transparent">
        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full gap-6 md:gap-12 lg:gap-24 items-center px-4 md:px-8">
            <div className="space-y-4 md:space-y-8 order-2 md:order-1 relative z-10">
                <div className="space-y-2 md:space-y-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-stone-400">Strategy</span>
                    <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-stone-900 leading-[1.1]">
                        Story orientated <br/> <span className="italic text-stone-400">subscriptions.</span>
                    </h2>
                </div>
                
                <div className="space-y-4 md:space-y-6 font-sans font-light text-stone-600 text-sm md:text-base lg:text-lg leading-relaxed">
                    <p>
                        Longevity is only meaningful when framed in the context of the individual. The subscription should connect the person to a clear narrative rather than offering a general purpose longevity program.
                    </p>
                    <p className="font-medium text-stone-900">
                        This is evolving Everlab’s current screenings to be personalised and story-orientated from the start.
                    </p>
                    <p className="text-sm md:text-base">
                        The underlying screenings (tests + imaging + performance measures) remain the same, but are repackaged using existing infrastructure. The change is in signalling and orienting, with a focus on:
                    </p>

                    <ul className="space-y-2 md:space-y-3 text-sm md:text-base pt-2">
                        <li className="flex items-start gap-3">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-stone-400 mt-2"></span>
                            <span>a <strong className="text-stone-800 font-medium">specific promise</strong> (anchored in one anxiety/desire)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-stone-400 mt-2"></span>
                            <span>a <strong className="text-stone-800 font-medium">specific storyline</strong> (“future child”, “fatigue & metabolism”)</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-stone-400 mt-2"></span>
                            <span>and <strong className="text-stone-800 font-medium">personalised add-ons</strong>.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="order-1 md:order-2 w-full relative z-10">
                 <SubscriptionCarousel />
            </div>
        </div>
    </Slide>
  );
};