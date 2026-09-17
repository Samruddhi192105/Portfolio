"use client";

import Image from "next/image";
import React from "react";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { BlurIn } from "../reveal-animations";

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex w-full flex-col justify-center py-24"
    >
      <SectionHeader
        id="about"
        title="About Me"
        desc="A little about me, what I build, and what I enjoy working with."
        className="static mb-14"
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-4 md:grid-cols-2">

        {/* Photo */}
        <BlurIn delay={0.3}>
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border/60 bg-secondary/20">
            <Image
              src="/assets/samruddhi-about.jpg"
              alt="Samruddhi Ghawade"
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </BlurIn>

        {/* About Text */}
        <div className="flex flex-col gap-6">

          <BlurIn delay={0.5}>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              I&apos;m Samruddhi Ghawade, a Computer Science Engineering student
              and full-stack developer focused on building practical web
              applications, backend systems, and AI-powered tools.
            </p>
          </BlurIn>

          <BlurIn delay={0.7}>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              I work primarily with Java, Spring Boot, React, and Next.js. I&apos;m
              also exploring Generative AI through projects involving LLMs,
              RAG, and AI-assisted development.
            </p>
          </BlurIn>

          <BlurIn delay={0.9}>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              I enjoy working across the stack — from building responsive
              interfaces to developing REST APIs, authentication, databases,
              and intelligent developer tools.
            </p>
          </BlurIn>

          {/* Quick Info */}
          <BlurIn delay={1.1}>
            <div className="grid grid-cols-2 gap-3 pt-2">

              <div className="rounded-2xl border border-border/60 bg-secondary/20 p-4 backdrop-blur-sm">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Focus
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Full-Stack Development
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-secondary/20 p-4 backdrop-blur-sm">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Backend
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Java · Spring Boot
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-secondary/20 p-4 backdrop-blur-sm">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Frontend
                </p>
                <p className="mt-2 text-sm font-semibold">
                  React · Next.js
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-secondary/20 p-4 backdrop-blur-sm">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Exploring
                </p>
                <p className="mt-2 text-sm font-semibold">
                  Generative AI
                </p>
              </div>

            </div>
          </BlurIn>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;