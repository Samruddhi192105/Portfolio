"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Button } from "../ui/button";
import { LEETCODE_PROFILE } from "@/data/leetcode";

const STATS = [
  { label: "LeetCode solved", value: "600+" },
  { label: "Contest rating", value: "1800+" },
  { label: "Projects shipped", value: "4+" },
];

const LeetCodeSection = () => {
  return (
    <SectionWrapper
      id="leetcode"
      className="mx-auto flex w-full max-w-7xl flex-col px-4 py-24 md:min-h-[80vh]"
    >
      <SectionHeader
        id="leetcode"
        title={
          <>
            Data Structures
            <br />
            &amp; Algorithms
          </>
        }
        desc="LeetCode — 600+ questions solved. Contest rating 1800+."
        className="static mb-14"
      />

      <div className="pointer-events-auto mx-auto w-full max-w-5xl space-y-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-secondary/20 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 font-display text-3xl md:text-4xl">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link href={LEETCODE_PROFILE} target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
              View LeetCode profile
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LeetCodeSection;
