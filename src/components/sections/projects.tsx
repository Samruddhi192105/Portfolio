"use client";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";
import SlideShow from "../slide-show";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[130vh] px-4">
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative h-auto w-full overflow-hidden rounded-lg border border-white/10"
            style={{ aspectRatio: "3/2" }}
          >
            {/* `src` can be any aspect ratio (tall pages pan, normal ones fit);
                the wallpaper is an optional /assets/backgrounds/<id>.jpg. */}
            <ScrollingPreview
              src={`${project.screenshots[0]}?v=2`}
              alt={project.title}
              bg={`/assets/backgrounds/${project.id}.jpg`}
            />
            <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-4">
                <div className="text-lg text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {project.title}
                </div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-6xl md:h-[90vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="space-y-8 px-5 py-6 md:px-10 md:py-8">
              <div>
                <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                      Featured project
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-display text-xl font-bold tracking-tight text-foreground md:text-3xl">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.github && project.github !== "#" && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-muted"
                      >
                        GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    {project.live && project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/80"
                      >
                        Visit <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-border/70 bg-black/10 p-1 shadow-md dark:bg-white/5">
                  <SlideShow
                    images={project.screenshots.map((image) => `${image}?v=2`)}
                    enableZoom={false}
                  />
                </div>
              </div>

              <div className="border-l-2 border-primary px-5">
                <p className="max-w-4xl text-base leading-7 text-foreground/80">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h5 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  Tech Stack
                </h5>
                <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                  {project.skills.frontend?.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Frontend</span>
                      <FloatingDock
                        items={project.skills.frontend}
                        desktopClassName="!bg-background/80 border border-border/60 shadow-sm"
                      />
                    </div>
                  )}
                  {project.skills.backend?.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Backend</span>
                      <FloatingDock
                        items={project.skills.backend}
                        desktopClassName="!bg-background/80 border border-border/60 shadow-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>

        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;
