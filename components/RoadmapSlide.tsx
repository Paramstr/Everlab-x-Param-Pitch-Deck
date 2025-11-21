import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Bot, Sparkles, Megaphone, Target, Zap, Box, Layers } from 'lucide-react';
import { Slide } from './Slide';

// Traditional Waterfall Steps (Visual Only - Non-interactive)
const traditionalSteps = [
  { id: 1, y: 10, title: "Market Research", description: "Months of surveys to validate broad market needs." },
  { id: 2, y: 26, title: "Product Strategy", description: "Defining every feature before a line of code." },
  { id: 3, y: 42, title: "Design & Prototype", description: "High-fidelity UX/UI flows for the entire app." },
  { id: 4, y: 58, title: "Engineering Build", description: "Full-stack development of all validated features." },
  { id: 5, y: 74, title: "Clinical Operations", description: "Integrating labs, doctors, and logistics manually." },
  { id: 6, y: 90, title: "Public Launch", description: "Go-live with a finished, unchangeable product." }
];

// Lean Validation Steps (Interactive)
const leanSteps = [
  {
    id: 0,
    y: 10,
    shortTitle: "Phase 0",
    subTitle: "Market Test",
    icon: Megaphone,
    content: {
      headline: "Phase 0 — No Product Changes",
      subhead: "(Marketing-First Testing)",
      intro: "Test verticals through only brand, story, and landing pages — not product.",
      bullets: [
        "Build 5–10 story-specific propositions (Pregnancy, Hypertension, Libido, etc.)",
        "Ship lightweight landing pages (e.g., 'Fertility Readiness Assessment')",
        "Run ads + content funnels to test intent & WTP",
        "Identify verticals with disproportionate demand"
      ],
      sections: [
        {
          label: "Meta",
          text: "Iterate narratives without touching product. This is the cheapest way to discover where the market already is."
        },
        {
          label: "Goal",
          text: "Identify the verticals that produce disproportionate demand."
        }
      ]
    }
  },
  {
    id: 1,
    y: 26,
    shortTitle: "Phase I",
    subTitle: "Narrative Layer",
    icon: Target,
    content: {
      headline: "Phase I — Narrative Alignment",
      subhead: "(Still No Product Changes)",
      intro: "Once 1–2 verticals show strong signal, re-theme the homepage and messaging.",
      bullets: [
        "Re-theme homepage & onboarding for winning verticals",
        "Keep underlying screenings 100% the same",
        "Validate if vertical positioning increases conversion",
        "Confirm post-screen retention improvement"
      ],
      sections: [
        {
          label: "Goal",
          text: "Confirm that Everlab → “Fertility Platform” drives product-market pull before touching engineering."
        },
         {
          label: "Why",
          text: "This creates conviction without cost."
        }
      ]
    }
  },
  {
    id: 2,
    y: 42,
    shortTitle: "Phase II",
    subTitle: "Product Adapt",
    icon: Zap,
    content: {
      headline: "Phase II — Product Layer Adaptation",
      subhead: "(Light Touch Engineering)",
      intro: "Adapt only the surface layer of the product for validated verticals.",
      bullets: [
        "Vertical-specific onboarding questions",
        "Vertical-specific bundle cards",
        "Vertical-specific lab groupings (relabeling only)",
        "Minor UX adjustments matching the story"
      ],
      sections: [
        {
          label: "Goal",
          text: "Align the story with the experience, still using the same underlying operational model."
        },
        {
          label: "Impact",
          text: "Engineering cost: Low. Impact on engagement: High."
        }
      ]
    }
  },
  {
    id: 3,
    y: 58,
    shortTitle: "Phase III",
    subTitle: "Full Bundling",
    icon: Box,
    content: {
      headline: "Phase III — Full Bundling & Strategy",
      subhead: "(Real Productisation Begins)",
      intro: "Now with validated verticals, create truly verticalised bundles.",
      bullets: [
        "Create vertical-specific bundles (e.g., 'Fertility Readiness Panel')",
        "Recalculate pricing, add-ons, margins",
        "Adjust operational pathways with clinics",
        "Build vertical-specific action plan templates"
      ],
      sections: [
        {
          label: "Goal",
          text: "Turn early vertical wins into real revenue-generating products."
        },
         {
          label: "Team",
          text: "Engineering + Clinical Ops start working in tandem."
        }
      ]
    }
  },
  {
    id: 4,
    y: 74,
    shortTitle: "Phase IV",
    subTitle: "Deep Rebuild",
    icon: Layers,
    content: {
      headline: "Phase IV — Deep Product Rebuild",
      subhead: "(Vertical as a True Product Line)",
      intro: "At this stage conviction is high. Each vertical becomes its own mini-product.",
      bullets: [
        "Custom clinician workflows & reporting templates",
        "Custom progress trackers & dedicated content modules",
        "Telehealth & coaching protocols adapt to vertical",
        "Push communication tailored to the vertical journey"
      ],
      sections: [
        {
          label: "Goal",
          text: "Each vertical becomes its own mini-product inside Everlab (like Hims: hair loss → ED → weight loss)."
        }
      ]
    }
  },
  {
    id: 5,
    y: 90,
    shortTitle: "Phase V",
    subTitle: "AI Concierge",
    icon: Bot,
    content: {
      headline: "Phase V — AI Concierge Layer",
      subhead: "(Advanced Engagement)",
      isSpecial: true,
      specialBadge: "The Glue",
      intro: "After action plans and vertical flows are stable, AI becomes the engagement layer.",
      bullets: [
        "Personalises explainers and guidance per vertical",
        "Nudges through vertical-specific milestones",
        "Closes the loop between screening → action → re-testing",
        "Feeds insights back into product for retention"
      ],
      sections: [
        {
          label: "Goal",
          text: "AI becomes the glue that keeps members engaged and progressing through the vertical journey."
        }
      ]
    }
  }
];

export const RoadmapSlide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const CurrentIcon = leanSteps[activeStep].icon;
  const isSpecialStep = leanSteps[activeStep].content.isSpecial;

  // Auto-animate steps
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % leanSteps.length);
    }, 10000); // 10 seconds per phase

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false); // Stop auto-play on user interaction
  };

  return (
    <Slide className="bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full max-h-[85vh] w-full max-w-7xl mx-auto items-center relative z-10">
        
        {/* LEFT COLUMN: Dual Visualisation */}
        <div className="lg:col-span-5 h-full relative flex flex-col" ref={containerRef}>
           
           {/* Column Headers - Fixed at top relative to column */}
           <div className="flex justify-between px-4 text-[11px] uppercase tracking-[0.2em] font-bold  mt-12 text-stone-400 z-20 shrink-0">
               <span className="w-1/2 text-center text-stone-600 pl-12">Traditional</span>
               <span className="w-1/2 text-center text-emerald-600 bg-emerald-50/50 rounded-full">Lean & Validated</span>
           </div>

           {/* The SVG Canvas Container */}
           <div className="relative w-full flex-1 min-h-0">
             
             {/* SVG Layer for Connections */}
             <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg 
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                {/* --- Track 1: Traditional (Static, Clearly Visible) --- */}
                <motion.path 
                    d={`M 25 ${traditionalSteps[0].y} L 25 ${traditionalSteps[traditionalSteps.length-1].y}`} 
                    stroke="#d6d3d1"  // Stone-300
                    strokeWidth="1.5" 
                    strokeDasharray="4 4"
                    fill="none" 
                    vectorEffect="non-scaling-stroke" 
                />

                {/* --- Track 2: Lean (Interactive, Active) --- */}
                {leanSteps.map((step, index) => {
                    // Special handling for Arrow after last step
                    if (index === leanSteps.length - 1) {
                        return (
                            <g key={`arrow-down-${index}`}>
                                <motion.path 
                                    d={`M 75 ${step.y + 2} L 75 ${step.y + 6}`} 
                                    stroke={activeStep === index ? "#059669" : "#e7e5e4"} 
                                    strokeWidth="1.5" 
                                    fill="none" 
                                    strokeDasharray="2 2"
                                    animate={{ opacity: 1 }}
                                />
                                <motion.path
                                    d={`M 74.3 ${step.y + 4.5} L 75 ${step.y + 6} L 75.7 ${step.y + 4.5}`}
                                    stroke={activeStep === index ? "#059669" : "#e7e5e4"}
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        );
                    }
                    
                    const nextStep = leanSteps[index + 1];
                    const d = `M 75 ${step.y} L 75 ${nextStep.y}`;
                    const isCompleted = activeStep > index;

                    return (
                    <g key={`segment-${index}`}>
                        {/* Base Track (Grey) */}
                        <path 
                            d={d} 
                            stroke="#e7e5e4" 
                            strokeWidth="2" 
                            fill="none" 
                            vectorEffect="non-scaling-stroke" 
                        />
                        
                        {/* Active Progress (Emerald) - Animate fill */}
                        <motion.path
                            d={d}
                            stroke="#059669" // Emerald 600
                            strokeWidth="2"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: isCompleted ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </g>
                    );
                })}
                </svg>
             </div>

             {/* Nodes Layer (HTML) */}
             <div className="absolute inset-0 w-full h-full">
                
                {/* Traditional Nodes (Left, Static, Increased Visibility) */}
                {traditionalSteps.map((step) => (
                    <div 
                        key={`trad-${step.id}`}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-end opacity-80"
                        style={{ left: '25%', top: `${step.y}%` }}
                    >
                        <div className="absolute right-[-6px] w-3 h-3 bg-stone-400 rounded-full border-2 border-stone-50 z-10" />
                        <div className="text-right pr-6 w-48">
                            <span className="block font-serif text-sm text-stone-700 font-medium leading-none">
                                {step.title}
                            </span>
                            <span className="block text-[10px] text-stone-500 mt-1 font-sans leading-tight">
                                {step.description}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Lean Nodes (Right, Interactive) */}
                {leanSteps.map((step, index) => {
                    const isLast = index === leanSteps.length - 1;
                    const isActive = activeStep === index;
                    const isPast = activeStep > index;
                    
                    return (
                    <div 
                    key={step.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center group cursor-pointer z-30"
                    style={{ 
                        left: '75%', 
                        top: `${step.y}%`,
                    }}
                    onClick={() => handleStepClick(index)}
                    >
                    
                    {/* Node Label - Only show active to reduce clutter */}
                    <motion.div 
                        className={`absolute left-10 md:left-14 w-48 pointer-events-none md:pointer-events-auto`}
                        initial={{ opacity: 0.5, x: -5 }}
                        animate={{ 
                        opacity: isActive ? 1 : 0.3,
                        x: isActive ? 0 : -5,
                        scale: isActive ? 1 : 0.95
                        }}
                    >
                        <span className={`
                        font-serif transition-colors duration-300 block leading-tight
                        ${isActive ? 'text-stone-900 text-xl font-medium' : 'text-stone-400 text-base group-hover:text-stone-500'}
                        `}>
                        {step.shortTitle}
                        </span>
                    </motion.div>

                    {/* Node Circle */}
                    <motion.div 
                        className={`
                        relative z-10 rounded-full border flex items-center justify-center shrink-0 shadow-sm transition-all duration-500
                        ${isLast ? 'w-12 h-12' : 'w-10 h-10'}
                        ${isActive 
                            ? 'bg-stone-900 text-white ring-4 ring-emerald-500/20 border-stone-800 scale-110' 
                            : (isPast ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-stone-200 text-stone-300 hover:border-stone-300')}
                        `}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isPast ? (
                        <Check className="w-4 h-4" strokeWidth={3} />
                        ) : (
                        isLast && isActive ? <Sparkles className="w-4 h-4" /> :
                        <span className={`font-sans font-bold text-xs`}>{index}</span>
                        )}
                    </motion.div>

                    </div>
                )})}
             </div>
           </div>
        </div>

        {/* RIGHT COLUMN: Content Panel */}
        <div className="lg:col-span-7 h-full flex flex-col justify-center pl-0 pointer-events-none md:pointer-events-auto">
          <div className="mb-6 pl-2">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-2 block">Execution Strategy</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight">
                  From <span className="opacity-30 line-through decoration-stone-300">Waterfall</span> to <br/> <span className="italic text-emerald-700">Discovery-First</span>
              </h2>
          </div>

          {/* DARK MODE CARD */}
          <div 
            className={`
              rounded-3xl p-8 md:p-10 shadow-2xl min-h-[450px] flex flex-col relative overflow-hidden transition-all duration-500 border 
              ${isSpecialStep ? 'bg-slate-900 border-slate-700' : 'bg-stone-900 border-stone-800'}
              text-white
            `}
            onMouseEnter={() => setIsAutoPlaying(false)} // Pause on hover for reading
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
              
              {/* Background FX */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-700 z-0
                  ${isSpecialStep ? 'from-slate-800 via-slate-900 to-black' : 'from-stone-800 via-stone-900 to-black'}
              `} />
              
              <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[80px] pointer-events-none z-0 opacity-60 transition-colors duration-700
                   ${isSpecialStep ? 'bg-indigo-500/20' : 'bg-emerald-500/10'}
              `} />

              <AnimatePresence mode="wait">
                  <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative z-10 flex flex-col h-full"
                  >
                       {/* Header Row */}
                       <div className="flex justify-between items-start mb-6">
                           <div className="flex items-center gap-3">
                              <span className={`w-8 h-px ${isSpecialStep ? 'bg-slate-500' : 'bg-emerald-500'}`}></span>
                              <span className={`text-[10px] font-bold uppercase tracking-widest ${isSpecialStep ? 'text-slate-400' : 'text-emerald-400'}`}>
                                  {leanSteps[activeStep].shortTitle}
                              </span>
                           </div>
                           <div className={`p-2 rounded-lg border transition-colors duration-300 ${isSpecialStep ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-stone-800 border-stone-700 text-stone-300'}`}>
                              <CurrentIcon className="w-5 h-5" />
                           </div>
                       </div>
                       
                       {/* Titles */}
                       <div className="mb-6">
                            {leanSteps[activeStep].content.specialBadge && (
                                <span className="inline-block px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-3">
                                    {leanSteps[activeStep].content.specialBadge}
                                </span>
                            )}
                            <h3 className="font-serif text-2xl md:text-3xl text-stone-100 leading-tight mb-2">
                                {leanSteps[activeStep].content.headline}
                            </h3>
                            {leanSteps[activeStep].content.subhead && (
                                <p className="text-stone-400 font-sans text-sm uppercase tracking-wide">{leanSteps[activeStep].content.subhead}</p>
                            )}
                       </div>
                       
                       {/* Scrollable Content Area */}
                       <div className="overflow-y-auto pr-2 space-y-6 custom-scrollbar flex-1">
                           {/* Intro Paragraph */}
                           <p className={`font-sans leading-relaxed text-base font-light border-l-2 pl-4 transition-colors duration-300
                               ${isSpecialStep ? 'text-slate-200 border-slate-600' : 'text-stone-300 border-emerald-500/50'}
                           `}>
                              {leanSteps[activeStep].content.intro}
                           </p>

                           {/* Primary Bullets */}
                           {leanSteps[activeStep].content.bullets && (
                                <ul className="space-y-2 pl-1">
                                    {leanSteps[activeStep].content.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-stone-400 font-sans text-sm font-light">
                                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isSpecialStep ? 'bg-slate-500' : 'bg-emerald-600'}`} />
                                            <span className={`leading-relaxed ${isSpecialStep ? 'text-slate-300' : ''}`}>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                           )}

                           {/* Detail Sections */}
                           {leanSteps[activeStep].content.sections && (
                                <div className={`grid gap-4 pt-4 mt-2 border-t ${isSpecialStep ? 'border-slate-800' : 'border-stone-800/50'}`}>
                                    {leanSteps[activeStep].content.sections.map((section, i) => (
                                        <div key={i} className={`p-4 rounded-xl border ${isSpecialStep ? 'bg-slate-800/30 border-slate-800' : 'bg-stone-800/30 border-stone-800/50'}`}>
                                            <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${isSpecialStep ? 'text-slate-400' : 'text-stone-500'}`}>
                                                {section.label}
                                            </h4>
                                            <p className="text-stone-300 text-sm font-light leading-relaxed">
                                                {section.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                           )}
                       </div>
                  </motion.div>
              </AnimatePresence>
          </div>
        </div>
      </div>
    </Slide>
  );
};