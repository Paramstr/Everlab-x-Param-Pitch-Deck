import React, { useRef, useState, useEffect } from 'react';
import { Logo, Wordmark } from './components/Logo';
import { GradientBackground } from './components/GradientBackground';
import { IntroSlide } from './components/IntroSlide';
import { CurrentStateSlide } from './components/CurrentStateSlide';
import { StrategySlide } from './components/StrategySlide';
import { RoadmapSlide } from './components/RoadmapSlide';
import { CaseStudySlide } from './components/CaseStudySlide';
import { VisionSlide } from './components/VisionSlide';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle scroll detection to update current slide index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const slideWidth = container.clientWidth;
        const nextIndex = currentSlide + 1;
        container.scrollTo({ left: nextIndex * slideWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const slideWidth = container.clientWidth;
        const prevIndex = currentSlide - 1;
        container.scrollTo({ left: prevIndex * slideWidth, behavior: 'smooth' });
    }
  };

  return (
    <main className="text-stone-900 w-screen h-screen overflow-hidden relative selection:bg-stone-200">
      
      <GradientBackground />

      {/* Fixed Header - Subtle */}
      <header className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center opacity-90">
        <div className="flex items-center gap-3">
           {currentSlide > 0 && (
               <div className="flex items-center gap-2 transition-opacity duration-500">
                   <Logo className="h-6 w-auto text-stone-900" />
               </div>
           )}
        </div>
        <div className="font-sans text-xs tracking-widest uppercase text-stone-400 mix-blend-multiply">
            Pitch Deck 2025
        </div>
      </header>

      {/* Persistent Footer - Left (Name & Social) */}
      <div className="fixed bottom-8 left-8 md:left-16 z-50 flex flex-col items-start pointer-events-auto">
            <span className="font-sans text-xl md:text-2xl text-stone-900 font-bold tracking-tight mb-1">Param Singh</span>
            <a 
                href="https://www.linkedin.com/in/param-singh-769736159/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-sans font-bold tracking-widest uppercase text-stone-700 hover:text-stone-900 transition-colors flex items-center gap-1"
            >
                LinkedIn
                <ArrowRight className="w-3 h-3" />
            </a>
      </div>

      {/* Main Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto w-full h-full snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        
        {/* SLIDE 1: Intro */}
        <IntroSlide />

        {/* SLIDE 2: Current State */}
        <CurrentStateSlide />

        {/* SLIDE 3: Story Orientated Subscriptions */}
        <StrategySlide />

        {/* SLIDE 4: Roadmap */}
        <RoadmapSlide />

        {/* SLIDE 5: Case Study - Market Landscape */}
        <CaseStudySlide />

        {/* SLIDE 6: The Vision / Ideas */}
        <VisionSlide />
        
        {/* Navigation Footer (Sticky) - Right */}
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-6 mix-blend-difference text-stone-400">
            <div className="font-mono text-xs">
                0{currentSlide + 1} — 06
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={scrollPrev}
                    disabled={currentSlide === 0}
                    className={`p-2 rounded-full border border-current hover:bg-white hover:text-black transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                    onClick={scrollNext}
                    disabled={currentSlide === 5}
                    className={`p-2 rounded-full border border-current hover:bg-white hover:text-black transition-all ${currentSlide === 5 ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>

      </div>
    </main>
  );
}