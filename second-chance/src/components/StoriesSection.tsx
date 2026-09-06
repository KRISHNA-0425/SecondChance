import React, { useState } from 'react';
import { INMATE_STORIES } from '../data/mockData';
import { InmateStory } from '../types';
import { Quote, Mail, HeartHandshake, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

interface StoriesSectionProps {
  id?: string;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ id = 'stories' }) => {
  const [selectedStory, setSelectedStory] = useState<InmateStory>(INMATE_STORIES[0]);
  const [showLetterPreview, setShowLetterPreview] = useState(false);

  return (
    <section
      className="w-full bg-[#fcf9f8] py-16 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]"
      id={id}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[2.5px] border-[#111111] pb-4">
          <div>
            <span className="bg-[#b02f00] text-white px-3 py-1 font-mono text-xs uppercase font-extrabold inline-block mb-2">
              VOICES FROM THE INSIDE
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl uppercase text-[#111111] tracking-tight font-bold">
              TRANSFORMATION STORIES
            </h2>
          </div>
          <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] max-w-md leading-relaxed">
            Personal narratives of young people navigating the penal system from holding cells to
            literacy, dignified work, and second chances.
          </p>
        </div>

        {/* Hero Quote Spotlight Banner */}
        <div className="bg-[#ffe600] border-[3px] border-[#111111] p-6 sm:p-10 shadow-[8px_8px_0px_#111111] relative overflow-hidden">
          <div className="absolute top-2 right-4 text-black/10 select-none pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="bg-[#111111] text-[#ffe600] px-2.5 py-1 font-mono text-xs uppercase font-extrabold inline-block">
              TESTIMONIAL // WARD NO. 5 (YOUTH JAIL)
            </span>
            <blockquote className="font-['Space_Grotesk'] text-2xl sm:text-4xl uppercase text-[#111111] leading-tight font-bold">
              "I wish to learn any language so that I can write a letter to my family."
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-8 h-[2.5px] bg-[#111111]"></span>
              <div className="font-mono text-xs sm:text-sm font-extrabold uppercase text-[#111111]">
                RAVINDER • AGE 19 • TIHAR JAIL NO. 5
              </div>
            </div>
          </div>
        </div>

        {/* Inmate Narratives Carousel / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Story Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-xs uppercase font-bold text-[#111111] tracking-wider mb-2">
              SELECT INMATE DOSSIER:
            </div>
            {INMATE_STORIES.map((story) => {
              const isSelected = selectedStory.id === story.id;
              return (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className={`w-full text-left p-4 border-[2.5px] border-[#111111] transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#111111] text-white shadow-[4px_4px_0px_#ffe600] translate-x-1'
                      : 'bg-white text-[#111111] hover:bg-[#f6f3f2] shadow-[3px_3px_0px_#111111]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-['Space_Grotesk'] text-lg font-bold uppercase">
                        {story.name}
                      </span>
                      <span
                        className={`font-mono text-xs px-1.5 py-0.2 ${
                          isSelected ? 'bg-[#ffe600] text-[#111111]' : 'bg-[#e5e2e1] text-[#111111]'
                        } font-bold`}
                      >
                        Age {story.age}
                      </span>
                    </div>
                    <div
                      className={`font-mono text-xs mt-1 ${
                        isSelected ? 'text-[#ffdbd1]' : 'text-[#4b4731]'
                      }`}
                    >
                      {story.ward}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 ${
                      isSelected ? 'text-[#ffe600]' : 'text-[#111111]'
                    } shrink-0`}
                  />
                </button>
              );
            })}
          </div>

          {/* Selected Story Expanded Card (Right Column) */}
          <div className="lg:col-span-7 bg-white border-[3px] border-[#111111] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-[2px] border-[#111111] pb-4">
              <div>
                <span className="font-mono text-xs uppercase font-extrabold bg-[#0053db] text-white px-2 py-0.5">
                  INITIATIVE: {selectedStory.initiative}
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#111111] mt-1">
                  {selectedStory.name}'s Pathway
                </h3>
              </div>
              <span className="font-mono text-xs text-[#b02f00] font-extrabold uppercase bg-[#ffdbd1] px-2 py-1 border border-[#111111]">
                {selectedStory.ward}
              </span>
            </div>

            <div className="p-4 bg-[#f6f3f2] border-l-4 border-[#b02f00] italic font-['Inter'] text-base text-[#1c1b1b]">
              "{selectedStory.quote}"
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase font-bold text-[#111111] tracking-wider">
                DOCUMENTED TRANSFORMATION CHRONICLE:
              </h4>
              <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] leading-relaxed">
                {selectedStory.story}
              </p>
            </div>

            <div className="p-3.5 bg-[#dbe1ff] border-[2px] border-[#111111] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0053db] shrink-0" />
              <div>
                <div className="font-mono text-[11px] uppercase font-bold text-[#0053db]">
                  VERIFIED MILESTONE
                </div>
                <div className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-[#111111]">
                  {selectedStory.milestone}
                </div>
              </div>
            </div>

            {selectedStory.letterSnippet && (
              <div className="pt-2">
                <button
                  onClick={() => setShowLetterPreview(!showLetterPreview)}
                  className="bg-[#111111] text-[#ffe600] px-4 py-2 font-mono text-xs uppercase font-bold border-[2px] border-[#111111] flex items-center gap-2 hover:bg-[#ffe600] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>
                    {showLetterPreview ? 'Hide Letter Translation' : 'View First Letter Sent Home'}
                  </span>
                </button>

                {showLetterPreview && (
                  <div className="mt-3 p-4 bg-[#fff9c4] border-[2px] border-[#111111] font-mono text-sm text-[#111111] shadow-[2px_2px_0px_#111111]">
                    <div className="text-xs uppercase font-bold text-[#b02f00] mb-1">
                      ORIGINAL DISPATCH TRANSLATION:
                    </div>
                    <div className="italic font-serif text-base mb-2">
                      "{selectedStory.letterSnippet}"
                    </div>
                    <div className="text-xs text-[#4b4731]">
                      English Translation: "Respected Mother, I am safe here and learning to read and
                      write. When I return home, I will stand on my own two feet."
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
