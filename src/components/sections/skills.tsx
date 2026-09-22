"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TECH_STACK_GROUPS, type Skill } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.li
          style={{ "--skill": skill.color } as CSSProperties}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -3, scale: 1.04 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35, delay: index * 0.035, ease: "easeOut" }}
          className={cn(
            "flex cursor-help items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5",
            "text-sm text-foreground/90 backdrop-blur-sm",
            "transition-colors hover:border-[var(--skill)] hover:bg-secondary/60"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={skill.icon}
            alt=""
            width={16}
            height={16}
            loading="lazy"
            className="size-4 object-contain"
          />
          <span>{skill.label}</span>
        </motion.li>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs text-center">
        {skill.shortDescription}
      </TooltipContent>
    </Tooltip>
  );
}

function HtmlStack() {
  return (
    <div className="pointer-events-auto mx-auto grid w-full max-w-5xl grid-cols-1 gap-3 px-4 sm:grid-cols-2">
      {TECH_STACK_GROUPS.map((group) => (
        <article
          key={group.title}
          className="rounded-2xl border border-border/60 bg-secondary/20 p-5 backdrop-blur-sm"
        >
          <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {group.title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill, index) => (
              <SkillChip
                key={`${group.title}-${skill.name}`}
                skill={skill}
                index={index}
              />
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

/**
 * On capable devices the 3D keyboard is the interactive stage; the categorized
 * list is always shown so the stack is readable without hovering keys.
 */
const SkillsSection = () => {
  const { disable3D, ready } = usePerfProfile();
  const withKeyboard = ready && !disable3D;

  return (
    <SectionWrapper
      id="skills"
      className={cn(
        "flex w-full flex-col justify-center py-24",
        withKeyboard ? "md:min-h-[140vh]" : "min-h-screen"
      )}
    >
      <SectionHeader
        id="skills"
        title="Tech Stack"
        desc={
          withKeyboard
            ? "See the skills I use."
            : "See the skills I use. The 3D keyboard is disabled on your device."
        }
        className={withKeyboard ? "mb-24 md:mb-40" : "static mb-14"}
      />
      <HtmlStack />
    </SectionWrapper>
  );
};

export default SkillsSection;
