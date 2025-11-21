import React from 'react';
import { Slide } from './Slide';
import { Activity, Database, User, X, AlertCircle } from 'lucide-react';

export const CurrentStateSlide = () => {
  return (
    <Slide className="bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 h-full max-h-[85vh] items-center max-w-7xl mx-auto">
            
            {/* Left: Strengths (The Foundation) */}
            <div className="space-y-8 relative z-10">
                <div className="mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-2 block">Current State</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                        Where Everlab is today.
                    </h2>
                    <p className="text-stone-500 mt-4 text-lg font-light">
                        Strong clinically and operationally — but missing the story that makes the product "stick".
                    </p>
                </div>

                {/* The Foundation List */}
                <div className="relative pl-8 border-l border-stone-200 space-y-10">
                     {/* Point 1 */}
                     <div className="relative group">
                         <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-200 border-2 border-white ring-1 ring-stone-300 group-hover:bg-emerald-500 transition-colors"></span>
                         <h3 className="font-serif text-xl text-stone-900 mb-1">Scalable clinical distribution</h3>
                         <p className="text-sm text-stone-500 leading-relaxed">Partnered clinics across AU/NZ delivering high-quality screenings at increasingly affordable prices.</p>
                     </div>
                     {/* Point 2 */}
                     <div className="relative group">
                         <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-200 border-2 border-white ring-1 ring-stone-300 group-hover:bg-emerald-500 transition-colors"></span>
                         <h3 className="font-serif text-xl text-stone-900 mb-1">Strong operational & clinical stack</h3>
                         <p className="text-sm text-stone-500 leading-relaxed">Software acts as operational glue. Smooth logistics, trusted brand, clean execution.</p>
                     </div>
                     {/* Point 3 */}
                     <div className="relative group">
                         <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-200 border-2 border-white ring-1 ring-stone-300 group-hover:bg-emerald-500 transition-colors"></span>
                         <h3 className="font-serif text-xl text-stone-900 mb-1">Medical depth</h3>
                         <p className="text-sm text-stone-500 leading-relaxed">Membership gives access to screenings and action plans. <span className="text-stone-800 font-medium">Clinical credibility is the superpower.</span></p>
                     </div>
                </div>
            </div>

            {/* Right: The Gap (Problem & Insight) */}
            <div className="relative flex flex-col justify-center">
                
                {/* The Gap Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-stone-200 shadow-lg relative overflow-hidden z-10">
                     <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                        <Activity className="w-64 h-64" />
                     </div>
                     
                     {/* Visual Diagram of the Disconnect */}
                     <div className="flex items-center justify-between mb-8 px-4 pt-2">
                        {/* Service Node */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 bg-stone-100 rounded-2xl border border-stone-200 flex items-center justify-center">
                                <Database className="w-6 h-6 text-stone-500" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Services</span>
                        </div>

                        {/* Broken Connection */}
                        <div className="flex-1 px-4 flex flex-col items-center relative -top-2">
                             <div className="w-full h-px border-t-2 border-dashed border-red-200 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                                    <X className="w-4 h-4 text-red-400" />
                                </div>
                             </div>
                             <span className="text-[9px] text-red-400 font-medium mt-2 uppercase tracking-wide">No Narrative</span>
                        </div>

                        {/* User Node */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 bg-stone-100 rounded-2xl border border-stone-200 flex items-center justify-center">
                                <User className="w-6 h-6 text-stone-400" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Context</span>
                        </div>
                     </div>

                     <div className="space-y-6 border-t border-stone-100 pt-6">
                        <div>
                            <h3 className="font-serif text-xl text-stone-900 mb-2">Strong services, weak story.</h3>
                            <p className="text-sm text-stone-500 leading-relaxed">
                                Right now, Everlab communicates <em>what</em> it offers (biomarkers), but not <em>why</em> it matters to the individual's life.
                            </p>
                        </div>

                        <div className="space-y-3 bg-red-50/50 p-4 rounded-xl border border-red-100/50">
                            <div className="flex gap-3 items-start text-sm text-stone-700">
                                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                <span>Users feel overwhelmed by "general longevity"</span>
                            </div>
                            <div className="flex gap-3 items-start text-sm text-stone-700">
                                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                <span>Screenings not mapped to life stories (Pregnancy, Energy)</span>
                            </div>
                            <div className="flex gap-3 items-start text-sm text-stone-700">
                                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                <span>Motivation is fuzzy → Retention softens</span>
                            </div>
                        </div>
                     </div>
                </div>

                {/* The Insight Banner */}
                <div className="mt-6 md:-ml-12 relative z-20">
                    <div className="bg-stone-900 text-stone-50 p-6 rounded-xl shadow-2xl border border-stone-800">
                        <p className="font-serif text-lg leading-relaxed">
                            <span className="text-stone-500 text-[10px] font-sans font-bold uppercase tracking-widest block mb-2">The Insight</span>
                            Everlab has the <span className="text-emerald-400 font-medium">clinical engine</span> — but needs <span className="italic text-blue-200">story-driven product framing</span> to convert screenings into meaningful, long-term health journeys.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </Slide>
  );
};