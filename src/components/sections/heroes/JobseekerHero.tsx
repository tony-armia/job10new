"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JOBSEEKER_HERO_CONFIG } from "@/config/landingConfig";
import {
  ArrowRight,
  MapPin,
  Building2,
  BadgeCheck,
} from "lucide-react";

export function JobseekerHero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white overflow-hidden">
      {/* Hero Section Background: herobgjobseeker */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/herobgjobseeker.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Soft bottom gradient to blend seamlessly into white */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* Top Centered Headline Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Main Expressive Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-5">
            {JOBSEEKER_HERO_CONFIG.headlinePrefix}{" "}
            <span className="block text-[#192CE7] mt-1 sm:mt-2">
              {JOBSEEKER_HERO_CONFIG.highlightWord}
            </span>
          </h1>

          {/* Subtitle / Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Find opportunities that match your skills, experience, and ambitions.
            <br className="hidden sm:inline" />{" "}
            Let{" "}
            <span className="relative inline-block font-bold text-slate-900 px-3 py-0.5 mx-0.5 animate-badge-slow transition-transform duration-500 hover:scale-105 hover:-translate-y-0.5 cursor-default select-none group">
              <span className="relative z-10">Job10&apos;s AI</span>
              <span
                className="absolute inset-0 rounded-full scale-105 -z-0 bg-gradient-to-r from-[#DBEAFE] via-[#E0EAFF] to-[#EFF6FF] shadow-2xs transition-all duration-300 group-hover:from-[#CFE4FE] group-hover:to-[#E2EEFF]"
                aria-hidden="true"
              />
            </span>{" "}
            help you discover relevant job matches in just 10 minutes.
          </p>

          {/* Centered CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7">
            <a href={JOBSEEKER_HERO_CONFIG.primaryCtaHref}>
              <Button
                size="lg"
                className="rounded-full px-8 py-3.5 h-[50px] text-base font-semibold bg-[#192CE7] hover:bg-[#1324C7] text-white shadow-md hover:shadow-lg transition-all group cursor-pointer inline-flex items-center justify-center gap-2 active:scale-95"
              >
                <span>{JOBSEEKER_HERO_CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>

            <a
              href={JOBSEEKER_HERO_CONFIG.secondaryCtaHref}
              className="inline-flex items-center justify-center gap-1.5 text-base font-medium text-slate-700 hover:text-slate-950 transition-colors cursor-pointer group px-2 py-2"
            >
              <span>{JOBSEEKER_HERO_CONFIG.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Centerpiece Showcase: Wide Landscape Photo + Floating Stripe Opportunity Card */}
        <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16 lg:mt-20">
          {/* Main High-Resolution Photo Banner */}
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl shadow-indigo-950/15 border-4 sm:border-[6px] border-white bg-slate-100 aspect-[16/10] sm:aspect-[16/9] group/banner">
            <Image
              src="/images/jobseeker-hero-banner.jpg"
              alt="Professional working in modern bright office"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover object-left-top sm:object-center transition-transform duration-700 group-hover/banner:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Opportunity Showcase on the Right (Desk Area) */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:right-6 lg:right-10 sm:bottom-6 lg:bottom-8 flex flex-col items-end gap-2.5 z-10 max-w-full sm:max-w-[440px] w-full animate-float-slow">
            {/* Top Verified Mini Pill */}
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100/90 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900 transition-transform duration-200 hover:scale-105">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Verified Direct Opportunities</span>
            </div>

            {/* Floating Opportunity Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-100/90 w-full text-left transition-all duration-300 hover:shadow-[#192CE7]/10 hover:-translate-y-1">
              {/* Top Company Row */}
              <div className="flex items-center gap-3.5 mb-3.5">
                {/* Stripe Brand Logo Squircle */}
                <div className="w-12 h-12 rounded-2xl bg-[#635BFF] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <span className="font-bold text-white text-[13px] tracking-tight">stripe</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-700">Stripe</span>
                    <BadgeCheck className="w-4 h-4 text-[#192CE7] fill-indigo-100 shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    Product Designer
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>San Francisco, US</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Hybrid</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Salary & Full Time Row */}
              <div className="flex items-center justify-between text-xs sm:text-sm py-3 border-t border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight">
                    $120k – $160k
                  </span>
                  <span className="text-xs text-slate-500 font-normal">/ yr</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EEF2FF] text-[#192CE7]">
                  Full Time
                </span>
              </div>

              {/* Tags & Quick Apply Button */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg shrink-0">
                    Product Design
                  </span>
                  <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg shrink-0">
                    Figma
                  </span>
                  <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-1 rounded-lg shrink-0">
                    +2
                  </span>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#192CE7] hover:bg-[#1324C7] text-white shadow-sm hover:shadow transition-all duration-200 cursor-pointer group/btn shrink-0 active:scale-95"
                >
                  <span>Quick Apply</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
