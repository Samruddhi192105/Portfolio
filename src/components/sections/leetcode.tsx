"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Button } from "../ui/button";
import { LEETCODE_PROFILE } from "@/data/leetcode";

const STATS = [
  { label: "LeetCode solved", value: "180+" },
  { label: "Coding platforms", value: "2" },
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
        desc="LeetCode — 180+ questions solved."
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
      <p className="mt-2 font-display text-3xl md:text-4xl">
        {stat.value}
      </p>
    </div>
  ))}

  <Link
    href="/certificates/nptel-dsa-java.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-2xl border border-border/60 bg-secondary/20 p-6 backdrop-blur-sm transition-all hover:bg-secondary/40"
  >
    <p className="text-xs uppercase tracking-widest text-muted-foreground">
      NPTEL Certification
    </p>

    <p className="mt-2 font-display text-xl md:text-2xl">
      DSA in Java
    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      View Certificate
      <ArrowUpRight className="ml-1 inline size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </p>
  </Link>
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
