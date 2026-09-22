"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { BlurIn } from "../reveal-animations";
import { EXPERIENCE } from "@/data/constants";
import { CalendarDays } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="flex w-full flex-col justify-center py-28"
    >
      <SectionHeader
        id="experience"
        title="Experience"
        desc="My internship experience and hands-on development journey."
        className="static mb-14"
      />

      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="relative">
          <div className="relative">
            <div className="absolute left-5 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-border md:block" />

            <div className="flex flex-col gap-10">
              {EXPERIENCE.map((experience, index) => (
                <BlurIn
                  key={experience.id}
                  delay={0.2 + index * 0.15}
                >
                  <div className="group relative md:pl-16">
                    <div className="absolute left-0 top-5 hidden size-10 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background md:flex">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="rounded-2xl border border-border/60 border-l-2 border-l-foreground/30 bg-secondary/20 p-5 backdrop-blur-sm transition-colors duration-300 group-hover:border-l-foreground sm:p-6">
                      <div className="mb-6 flex flex-col gap-4 border-b border-border/60 pb-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="mb-2 text-sm font-medium text-foreground/70">
                            {experience.company}
                          </p>
                          <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                            {experience.title}
                          </h3>
                        </div>

                        <span className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                          <CalendarDays size={14} />
                          <span>{experience.startDate} – {experience.endDate}</span>
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {experience.description.map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-sm leading-7 text-muted-foreground"
                          >
                            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-foreground/60" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BlurIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;