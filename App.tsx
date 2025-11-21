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
  const [showDesktopNotice, setShowDesktopNotice] = useState(true);

  const slideInfo = [
    { title: "Introduction", subtitle: "A new product perspective" },
    { title: "Current State", subtitle: "Where Everlab is today" },
    { title: "Strategy", subtitle: "Story-oriented subscriptions" },
    { title: "Roadmap", subtitle: "Product development timeline" },
    { title: "Case Study", subtitle: "Market landscape analysis" },
    { title: "Vision", subtitle: "The future of health journeys" }
  ];

  // Hide desktop notice after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDesktopNotice(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Desktop Notice - Only show on mobile */}
      {showDesktopNotice && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <div className="bg-stone-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
            Best viewed on desktop
          </div>
        </div>
      )}

      {/* Fixed Header - Subtle */}
      <header className="fixed top-0 left-0 w-full p-4 md:p-8 z-50 flex justify-between items-center opacity-90">
        <div className="flex items-center gap-3">
           {currentSlide > 0 && (
               <div className="flex items-center gap-2 transition-opacity duration-500">
                   <Logo className="h-4 md:h-6 w-auto text-stone-900" />
               </div>
           )}
        </div>
        <div className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-stone-400 mix-blend-multiply">
            Pitch Deck 2025
        </div>
      </header>

      {/* Name & Social - Show on first slide (mobile) */}
      {currentSlide === 0 && (
        <div className="fixed bottom-4 left-4 md:hidden z-50 flex flex-col items-start pointer-events-auto">
              <span className="font-sans text-lg text-stone-900 font-bold tracking-tight mb-1">Param Singh</span>
              <a 
                  href="https://www.linkedin.com/in/param-singh-769736159/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-sans font-bold tracking-widest uppercase text-stone-700 hover:text-stone-900 transition-colors flex items-center gap-1"
              >
                  LinkedIn
                  <ArrowRight className="w-2.5 h-2.5" />
              </a>
        </div>
      )}

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
        
      </div>

      {/* Bottom Navigation Bar - Always Visible */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-t from-white via-white/95 to-transparent h-32 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm border-t border-stone-200/50 p-4 md:p-6 pointer-events-auto">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Left: Slide Info */}
            <div className="flex flex-col">
              <div className="font-mono text-[10px] md:text-xs text-stone-400 uppercase tracking-wide mb-1">
                0{currentSlide + 1} — 06
              </div>
              <h3 className="font-serif text-lg md:text-xl text-stone-900 font-medium">
                {slideInfo[currentSlide]?.title}
              </h3>
              <p className="text-xs md:text-sm text-stone-500 font-light">
                {slideInfo[currentSlide]?.subtitle}
              </p>
            </div>

            {/* Center: Name & LinkedIn (Desktop Only) */}
            <div className="hidden md:flex flex-col items-center pointer-events-auto">
              <span className="font-sans text-xl text-stone-900 font-bold tracking-tight mb-1">Param Singh</span>
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

            {/* Right: Navigation */}
            <div className="flex gap-2 md:gap-3">
              <button 
                onClick={scrollPrev}
                disabled={currentSlide === 0}
                className={`p-2 md:p-3 rounded-full border border-stone-300 hover:bg-stone-100 hover:border-stone-400 transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ArrowLeft className="w-4 md:w-5 h-4 md:h-5 text-stone-600" />
              </button>
              <button 
                onClick={scrollNext}
                disabled={currentSlide === 5}
                className={`p-2 md:p-3 rounded-full border border-stone-300 hover:bg-stone-100 hover:border-stone-400 transition-all ${currentSlide === 5 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-stone-600" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}