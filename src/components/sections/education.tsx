"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { BlurIn } from "../reveal-animations";

const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Savitribai Phule Pune University, Pune",
    duration: "2023 – 2027",
    score: "CGPA: 9.62 / 10",
    description:
      "Currently pursuing a Bachelor of Engineering in Computer Engineering, with a focus on software development, backend systems, and AI technologies.",
  },
  {
    degree: "Class XII — HSC",
    institution: "Raj Junior College, Yavatmal - Intermediate",
    duration: "2022 - 2023",
    score: "Percentage: 76.17%",
  },
  {
    degree: "Class X — CBSE",
    institution: "St. Aloysius English Medium School, Yavatmal",
    duration: "2020 - 2021",
    score: "Percentage: 99.2%",
    },
];

const EducationSection = () => {
  return (
    <SectionWrapper
      id="education"
      className="flex w-full flex-col justify-center py-24"
    >
      <SectionHeader
        id="education"
        title="Education"
        desc="My academic journey and educational background."
        className="static mb-14"
      />

      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

          <div className="flex flex-col gap-8">
            {education.map((item, index) => (
              <BlurIn key={item.degree} delay={0.2 + index * 0.15}>
                <div className="relative md:pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 hidden size-[23px] items-center justify-center rounded-full border border-border bg-background md:flex">
                    <div className="size-2 rounded-full bg-foreground" />
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6 backdrop-blur-sm transition-colors hover:border-border">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item.degree}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                        {item.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-medium">
                      {item.score}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </BlurIn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;