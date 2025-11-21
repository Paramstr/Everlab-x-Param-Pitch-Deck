import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const bundles = [
  {
    id: 1,
    tag: "Fertility",
    title: "Ready your body for pregnancy",
    image: "https://i.pinimg.com/1200x/19/e5/b2/19e5b2460ec852a8e2009ccb9d6c5a46.jpg",
    bullets: [
      "Understand your cycle, hormones, and nutrients",
      "Know where both partners stand",
      "Build the groundwork for a healthy conception"
    ],
    explainer: {
      whyExists: "Trying—or thinking about trying—raises a quiet uncertainty: “Are we ready?” This bundle gives couples clarity. It reframes fertility from worry into preparation.",
      whatInside: [
        { label: "Female health", value: "LH, FSH, SHBG, iron, Vit D, thyroid" },
        { label: "Male health", value: "Testosterone, SHBG, sperm quality nutrients" },
        { label: "Metabolic", value: "Insulin, glucose, HbA1c, hs-CRP" },
        { label: "Longevity base", value: "Heart, kidney, liver, blood profile" }
      ],
      whyMatters: "We highlight the markers that shape egg health, sperm quality, cycle regularity, and thyroid function—the foundations of conception.",
      narrative: "This isn’t a fertility clinic. It’s a calm, data-backed preparation story. A way to navigate it together, with no judgement or pressure."
    }
  },
  {
    id: 2,
    tag: "Wellbeing",
    title: "Reconnect with your energy and desire",
    image: "https://i.pinimg.com/1200x/48/ae/bd/48aebd471cb7bc77590f11b933f1113a.jpg",
    bullets: [
      "Explore hormones, sleep, stress, and connection",
      "Understand why energy dips",
      "Build a healthier rhythm together"
    ],
    explainer: {
      whyExists: "Libido and energy don’t drop at random. They shift with sleep, stress, and hormones. This bundle gives you the insight to understand what’s really happening.",
      whatInside: [
        { label: "Hormones", value: "Testosterone, LH/FSH, SHBG" },
        { label: "Thyroid", value: "TSH for metabolic drive" },
        { label: "Nutrition", value: "Vitamin D, B12, Zinc, Magnesium" },
        { label: "Metabolic", value: "Insulin, glucose, HbA1c, Visceral fat" }
      ],
      whyMatters: "Libido and vitality are downstream of physiological load. These tests identify which lever is driving the fatigue-desire loop.",
      narrative: "This is not about pathology. It’s a practical path back to feeling energised and present—grounded in data."
    }
  },
  {
    id: 3,
    tag: "Longevity",
    title: "Live healthier, longer",
    image: "https://i.pinimg.com/1200x/bb/73/d7/bb73d7af11851b0878106b8082679a07.jpg",
    bullets: [
      "A 360° view of how your body is aging",
      "Detect issues early",
      "Build a plan that compounds over time"
    ],
    explainer: {
      whyExists: "Most people don’t know how their body is aging until something goes wrong. This bundle gives you the clearest picture of long-term health today.",
      whatInside: [
        { label: "Heart health", value: "Lipids, ApoB, LP(a), BP profiling" },
        { label: "Metabolism", value: "Glucose, insulin, HbA1c, thyroid" },
        { label: "Organs", value: "Liver & kidney (ALT/AST, eGFR)" },
        { label: "Body comp", value: "DEXA, visceral fat, lean mass" }
      ],
      whyMatters: "Longevity is about managing slow-moving risks: cardiovascular damage, metabolic drift, and inflammation.",
      narrative: "You’re getting a single, coherent story of your future health. One that grounds your decisions in what actually moves lifespan forward."
    }
  }
];

export const SubscriptionCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bundles.length);
    }, 12000); // Slower rotation (12s) for reading long copy
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bundles.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? bundles.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const current = bundles[index];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center md:items-end">
      <div className="w-full max-w-[500px] relative">
        
        {/* Navigation Controls - Floating outside/top */}
        <div className="absolute -top-12 right-0 flex gap-2 z-20">
            <button onClick={prevSlide} className="p-2 rounded-full border border-stone-300 hover:bg-stone-100 transition-colors">
                <ArrowLeft className="w-4 h-4 text-stone-600" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full border border-stone-300 hover:bg-stone-100 transition-colors">
                <ArrowRight className="w-4 h-4 text-stone-600" />
            </button>
        </div>

        <AnimatePresence mode="wait">
            <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="flex flex-col gap-4"
            >
                {/* Label above top card */}
                <div className="px-1 flex justify-between items-end">
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-stone-400 uppercase">
                        Example Story Card 0{current.id}
                    </span>
                </div>

                {/* LAYER 1: Immersive Visual Card - Taller Portrait Aspect */}
                <div className="relative w-full h-[460px] rounded-[24px] overflow-hidden shadow-xl group">
                    <img 
                        src={current.image} 
                        alt={current.title} 
                        className="w-full h-full object-cover transition-transform duration-[10s] ease-linear scale-110 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-[10px] font-sans uppercase tracking-widest mb-4">
                            {current.tag}
                        </span>
                        <h3 className="font-serif text-3xl md:text-4xl leading-none mb-4 tracking-tight">
                            {current.title}
                        </h3>
                        <ul className="space-y-2 opacity-90">
                            {current.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm font-sans tracking-wide text-stone-200/90">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0"/>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* LAYER 2: White Explainer Card - Auto height, no scroll */}
                <div className="w-full bg-white/80 backdrop-blur-md rounded-[24px] p-8 shadow-lg border border-white/50 text-stone-800">
                    <div className="flex flex-col gap-6">
                        
                        {/* Why this exists */}
                        <div>
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-2 font-sans">Why this exists</h4>
                            <p className="font-sans text-sm leading-relaxed text-stone-700">
                                {current.explainer.whyExists}
                            </p>
                        </div>

                        {/* What's Inside - Compact Grid */}
                        <div>
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-2 font-sans">What's inside</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {current.explainer.whatInside.map((item, i) => (
                                    <div key={i} className="flex items-baseline gap-3 text-sm border-b border-stone-100 pb-2 last:border-0">
                                        <strong className="font-medium text-stone-900 whitespace-nowrap font-sans text-xs">{item.label}:</strong>
                                        <span className="text-stone-600 font-sans truncate">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why these matter */}
                        <div>
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-2 font-sans">Why these matter</h4>
                            <p className="font-sans text-xs leading-relaxed text-stone-600">
                                {current.explainer.whyMatters}
                            </p>
                        </div>

                         {/* Narrative */}
                         <div className="bg-stone-50/80 p-4 rounded-xl border border-stone-100">
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-2 font-sans">Narrative</h4>
                            <p className="font-sans italic text-sm leading-relaxed text-stone-800">
                                "{current.explainer.narrative}"
                            </p>
                        </div>

                    </div>
                </div>

            </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-6">
            {bundles.map((_, i) => (
                <button
                    key={i}
                    onClick={() => { setIndex(i); setIsAutoPlaying(false); }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                        i === index ? 'w-8 bg-stone-800' : 'w-2 bg-stone-300'
                    }`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};
