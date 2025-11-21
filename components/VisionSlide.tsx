import React from 'react';
import { Slide } from './Slide';
import { Cpu, Heart, Layers, ExternalLink, Briefcase, ArrowUpRight } from 'lucide-react';

export const VisionSlide = () => {
  return (
    <Slide className="bg-transparent">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 h-full items-center relative z-10 max-w-7xl mx-auto px-4 md:px-8">
             
             {/* Left Column: Visual / Context */}
             <div className="col-span-1 lg:col-span-5 relative h-[30vh] md:h-[40vh] lg:h-[75vh] w-full rounded-2xl md:rounded-3xl lg:rounded-[32px] overflow-hidden border border-stone-200 shadow-2xl lg:order-1 order-2">
                <img 
                    src="https://i.imgur.com/oI7Z6Pr.jpeg" 
                    alt="Workspace" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-4 md:p-6 lg:p-8 w-full text-white">
                    <div className="w-8 md:w-10 lg:w-12 h-1 bg-emerald-400 mb-3 md:mb-4 lg:mb-6"></div>
                    <p className="font-serif italic text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed opacity-90">
                        "Most problems in health sit at the intersection of technical systems and human experience."
                    </p>
                </div>
             </div>

             {/* Right Column: Content */}
             <div className="col-span-1 lg:col-span-7 flex flex-col justify-center h-full lg:order-2 order-1 pb-6 md:pb-8 lg:pb-0 overflow-y-auto lg:overflow-visible no-scrollbar">
                <div className="mb-4 md:mb-6 lg:mb-8 pt-4 md:pt-6 lg:pt-0">
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-none mb-3 md:mb-4 lg:mb-6 text-stone-900">
                        Why Me?
                    </h2>
                    <p className="font-sans text-sm md:text-base lg:text-lg text-stone-600 leading-relaxed font-light border-l-2 border-stone-200 pl-4 md:pl-6">
                        I’ve spent the last six months building a preventative health product end-to-end — working directly with clinicians, members, and real-world screening flows.
                    </p>
                </div>
                
                {/* Recent Relevant Work Highlight */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-stone-100 mb-4 md:mb-6 relative overflow-hidden group">
                    <div className="absolute -right-4 md:-right-6 -top-4 md:-top-6 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                        <Briefcase className="w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-emerald-600 mb-2 md:mb-3 block">Recently</span>
                    <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-stone-900 mb-2 md:mb-3">Omni (Ahana Studios)</h3>
                    <p className="text-stone-600 font-sans font-light leading-relaxed text-xs md:text-sm lg:text-base relative z-10">
                        I built a platform that connected blood work, nutritionists, doctors, and member data into one system to personalise nutrition, streamline testing, and deliver a cohesive, engaging action plan from day one.
                    </p>
                </div>

                {/* Core Characteristics Grid */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 lg:mb-8">
                    {/* Skillset */}
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl border border-stone-200 bg-white/50 hover:bg-white transition-all">
                        <div className="flex items-start gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                                <Cpu className="w-3 h-3 md:w-4 md:h-4 text-stone-700" />
                            </div>
                            <div>
                                <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-stone-400 mb-1">Technical Depth</h4>
                                <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                                    Background in engineering & AI. Translating complex data into human experiences.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Passion */}
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl border border-stone-200 bg-white/50 hover:bg-white transition-all">
                         <div className="flex items-start gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                                <Heart className="w-3 h-3 md:w-4 md:h-4 text-stone-700" />
                            </div>
                            <div>
                                <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-stone-400 mb-1">Conviction</h4>
                                <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                                    Making health feel understandable, emotionally grounded, and connected to a story.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links Section - Clean Citation Style */}
                <div className="mt-2 pt-4 md:pt-6 border-t border-stone-200">
                     <div className="flex items-center gap-2 mb-3 md:mb-4 opacity-60">
                        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500 font-sans">Selected Writing</span>
                     </div>
                     <div className="space-y-2 md:space-y-3">
                        <a 
                            href="https://www.notion.so/paramsingh/Everlab-and-The-Psychologies-of-Health-2a9717cb642580cf98d3e66acb99476d?source=copy_link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-baseline gap-2 md:gap-3 group hover:translate-x-1 transition-all duration-300"
                        >
                            <span className="text-stone-300 font-serif italic text-xs md:text-sm">01</span>
                            <span className="font-serif text-sm md:text-base lg:text-lg text-stone-800 group-hover:text-emerald-700 transition-colors group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">
                                Everlab and the Psychologies of Health
                            </span>
                            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-stone-300 opacity-0 group-hover:opacity-100 transition-all" />
                        </a>
                        
                        <a 
                            href="https://www.notion.so/paramsingh/Telemedicine-and-Health-Concierge-2a1717cb642580efaa8afd61eb7a3340?source=copy_link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-baseline gap-2 md:gap-3 group hover:translate-x-1 transition-all duration-300"
                        >
                            <span className="text-stone-300 font-serif italic text-xs md:text-sm">02</span>
                            <span className="font-serif text-sm md:text-base lg:text-lg text-stone-800 group-hover:text-emerald-700 transition-colors group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">
                                Telemedicine and Health Concierge — Landscape
                            </span>
                            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-stone-300 opacity-0 group-hover:opacity-100 transition-all" />
                        </a>
                     </div>
                </div>

             </div>
        </div>
    </Slide>
  );
};