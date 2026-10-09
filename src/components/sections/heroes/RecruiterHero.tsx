"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RECRUITER_HERO_CONFIG } from "@/config/landingConfig";
import { ArrowRight, Users } from "lucide-react";

export function RecruiterHero() {
  return (
    <section className="relative pt-6 sm:pt-8 md:pt-12 bg-white overflow-hidden">
      {/* 
        AUTHENTIC HEROBG BACKGROUND (Desktop >= 1024px):
        Seamless full-bleed presentation showing ambient arches and the tablet interface at the bottom
      */}
      <div
        className="hidden lg:flex absolute inset-0 w-full h-full pointer-events-none select-none justify-center items-start overflow-hidden -z-0"
        aria-hidden="true"
      >
        <div className="relative w-full h-full max-w-[1672px] mx-auto translate-y-20 lg:translate-y-24 xl:translate-y-28">
          <Image
            src="/images/herobg.png"
            alt="Job10 talent matching platform"
            fill
            priority
            unoptimized
            className="object-contain object-top"
          />
        </div>

        {/* Ambient atmospheric radial glows ensuring seamless full-bleed coverage across ultra-wide / 4K monitors */}
        <div className="absolute -top-20 -left-40 sm:-left-20 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-gradient-to-tr from-[#E0DCFE]/50 via-[#EDE9FE]/30 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -top-16 -right-40 sm:-right-20 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full bg-gradient-to-tl from-[#FDE2EC]/50 via-[#FCE7F3]/30 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Ambient background glows for tablet & mobile */}
      <div
        className="lg:hidden absolute -top-12 -left-20 w-72 h-72 rounded-full bg-purple-100/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="lg:hidden absolute -top-12 -right-20 w-72 h-72 rounded-full bg-pink-100/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Centered Header Block: Scaled with exact proportions from reference */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-slate-900 tracking-tight leading-[1.08] mb-4">
            Build your dream team<br className="hidden sm:inline" />{" "}
            <span className="text-[#192CE7]">in the next 10 minutes.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl sm:max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Find candidates who match your role, requirements, and ambitions.
            <br className="hidden sm:inline" />{" "}
            Let Job10&apos;s{" "}
            <span className="relative inline-block font-bold text-slate-900 px-2.5 py-0.5 mx-0.5 animate-badge-slow transition-transform duration-500 hover:scale-105 hover:-translate-y-0.5 cursor-default select-none group">
              <span className="relative z-10">AI</span>
              <span
                className="absolute inset-0 rounded-full scale-105 -z-0 opacity-95 bg-[#FCE0E7] shadow-2xs transition-all duration-300 group-hover:bg-[#FCD8E3]"
                aria-hidden="true"
              />
            </span>{" "}
            help you discover relevant talent in just 10 minutes — so you can spend less time screening and more time building your team.
          </p>

          {/* CTAs: Purple primary button + subordinate text link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
            <a href={RECRUITER_HERO_CONFIG.primaryCtaHref}>
              <Button
                size="md"
                className="rounded-full px-7 py-3.5 h-12 text-sm sm:text-base font-semibold bg-[#192CE7] hover:bg-[#1324C7] text-white shadow-sm hover:shadow-md transition-all group cursor-pointer inline-flex items-center gap-2"
              >
                <span>{RECRUITER_HERO_CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>

            <a
              href={RECRUITER_HERO_CONFIG.secondaryCtaHref}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group"
            >
              <span>{RECRUITER_HERO_CONFIG.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* 
          DESKTOP SPACER (>= 1024px): 
          Extends the hero section naturally so the tablet in herobg.png is revealed at the bottom with perfect clearance
        */}
        <div
          className="hidden lg:block w-full h-[460px] xl:h-[520px] 2xl:h-[580px] pointer-events-none"
          aria-hidden="true"
        />

        {/* 
          MOBILE & TABLET SHOWCASE (< 1024px): 
          Places herobg.png below the CTAs in normal document flow so text NEVER overlaps the tablet
        */}
        <div className="lg:hidden mt-12 sm:mt-16 w-full max-w-2xl mx-auto px-2">
          <div className="relative w-full aspect-[1672/941]">
            <Image
              src="/images/herobg.png"
              alt="Job10 candidate matching platform"
              fill
              priority
              unoptimized
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
