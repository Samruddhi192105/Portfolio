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

      <div className="mx-auto w-full max-w-5xl space-y-10 px-4">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Photo */}
          <BlurIn delay={0.3}>
            <div className="mx-auto flex w-full max-w-[390px] items-center justify-center rounded-[46%] p-1.5 shadow-[0_22px_50px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
              <div className="overflow-hidden rounded-[46%] border border-white/20 bg-background/40 p-[1px]">
                <Image
                  src="/assets/SamruddhiImage.jpg"
                  alt="Samruddhi Ghawade"
                  width={800}
                  height={1000}
                  className="h-[360px] w-[320px] rounded-[46%] object-cover object-center"
                />
              </div>
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

          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;