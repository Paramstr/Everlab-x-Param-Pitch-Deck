import React from 'react';
import { Slide } from './Slide';
import { Check } from 'lucide-react';

export const CaseStudySlide = () => {
  return (
    <Slide className="bg-transparent">
         <div className="w-full flex flex-col relative z-10 justify-center mt-40">
            <div className="mb-6 shrink-0">
                <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-2 block">Case Study</span>
                <h2 className="font-serif text-3xl md:text-5xl text-stone-900 leading-tight">
                    Story-Driven <span className="italic text-stone-500">Consumer Healthcare</span>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pb-4">
                {/* Left Column: The Brands (Span 7) */}
                <div className="lg:col-span-7 flex flex-col gap-3 justify-center">
                    
                    {/* Hims & Hers */}
                    <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/50 hover:bg-white/80 transition-all group flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="font-serif text-xl text-stone-900">Hims & Hers</h3>
                            <span className="text-[10px] uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded text-stone-500 font-medium">Identity</span>
                        </div>
                        <p className="text-stone-800 font-medium text-sm mb-1">"Personalised stories, not products."</p>
                        <p className="text-xs text-stone-500 leading-relaxed">
                            They don't sell pills; they sell <span className="text-stone-800">better sex, regrown hair, and confidence</span>. 
                            The subscription feels like an identity upgrade ("Unlock your edge"), backed by a trust stack of 2M+ users.
                        </p>
                    </div>

                    {/* Juniper */}
                    <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/50 hover:bg-white/80 transition-all group flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="font-serif text-xl text-stone-900">Juniper</h3>
                            <span className="text-[10px] uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded text-stone-500 font-medium">Transformation</span>
                        </div>
                        <p className="text-stone-800 font-medium text-sm mb-1">"Lose weight for the last time."</p>
                        <p className="text-xs text-stone-500 leading-relaxed">
                            Medical weight loss framed as a <span className="text-stone-800">hero's journey</span>. 
                            It's not just medication—it's an ecosystem (coaching + community) that fixes the root cause, reframing shame into science.
                        </p>
                    </div>

                    {/* Pilot */}
                     <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/50 hover:bg-white/80 transition-all group flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="font-serif text-xl text-stone-900">Pilot</h3>
                            <span className="text-[10px] uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded text-stone-500 font-medium">Access</span>
                        </div>
                        <p className="text-stone-800 font-medium text-sm mb-1">"Better healthcare, for the boys."</p>
                        <p className="text-xs text-stone-500 leading-relaxed">
                            Making stigma-heavy issues (ED, hair loss) <span className="text-stone-800">safe, easy, and funny</span>. 
                            Direct, brotherly tone ("No judgement, mate") turns a medical hurdle into a simple online checkout.
                        </p>
                    </div>
                </div>

                {/* Right Column: The Pattern (Span 5) */}
                <div className="lg:col-span-5">
                    <div className="bg-stone-900 text-stone-50 p-6 rounded-2xl shadow-2xl h-full flex flex-col justify-between relative overflow-hidden border border-stone-800">
                         {/* Glow effect */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-stone-900 to-transparent pointer-events-none z-10"></div>

                        <div className="relative z-20">
                             <div className="flex items-center gap-3 mb-6 text-stone-400">
                                <span className="h-px w-8 bg-stone-700"></span>
                                <span className="font-serif italic text-sm tracking-wider text-stone-400">The Winning Pattern</span>
                            </div>
                            
                            <ul className="space-y-4">
                                <li className="group">
                                    <div className="flex items-center gap-3 mb-1">
                                        <Check className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                                        <strong className=" text-lg text-stone-200">Sell stories, not services.</strong>
                                    </div>
                                    <p className=" text-stone-400 text-xs leading-relaxed pl-7 ">The product isn't the pill. It's the version of you that sleeps better and lives longer.</p>
                                </li>
                                <li className="group">
                                    <div className="flex items-center gap-3 mb-1">
                                        <Check className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                                        <strong className="text-lg text-stone-200">Collapse the journey.</strong>
                                    </div>
                                    <p className=" text-stone-400 text-xs leading-relaxed pl-7 ">Hide the complexity of labs and biomarkers. Reveal only clarity: "Here is what to do next."</p>
                                </li>
                                 <li className="group">
                                    <div className="flex items-center gap-3 mb-1">
                                        <Check className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                                        <strong className=" text-lg text-stone-200">Subscription = Relationship.</strong>
                                    </div>
                                    <p className=" text-stone-400 text-xs leading-relaxed pl-7">Retention comes from coaching, small wins, and continuity—not just monthly deliveries.</p>
                                </li>
                                <li className="group">
                                    <div className="flex items-center gap-3 mb-1">
                                        <Check className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                                        <strong className=" text-lg text-stone-200">Single next step.</strong>
                                    </div>
                                    <p className=" text-stone-400 text-xs leading-relaxed pl-7">Remove the medical maze. One button: "Get Started".</p>
                                </li>
                            </ul>
                        </div>

                        <div className="relative z-20 mt-6 pt-6 border-t border-stone-800/50">
                             <p className="font-serif italic text-stone-500 text-xs">
                                "They hide complexity and reveal clarity."
                             </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </Slide>
  );
};