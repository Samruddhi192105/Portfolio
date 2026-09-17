import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Code2,
  Lightbulb,
  Wrench,
} from "lucide-react";

import { PROJECT_DETAILS } from "@/data/constants";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return PROJECT_DETAILS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = PROJECT_DETAILS.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Samruddhi Ghawade`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = PROJECT_DETAILS.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Hero */}
        <section className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Project
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {project.shortDescription}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              <Github size={17} />
              GitHub
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/60"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>
            )}
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16 grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Overview
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              About the project
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>{project.overview}</p>

            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
              <div className="mb-3 flex items-center gap-2 text-foreground">
                <Lightbulb size={18} />
                <h3 className="font-semibold">Problem</h3>
              </div>

              <p>{project.problem}</p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
              <div className="mb-3 flex items-center gap-2 text-foreground">
                <Wrench size={18} />
                <h3 className="font-semibold">Solution</h3>
              </div>

              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              What it does
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/20 p-5"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span className="text-sm leading-6">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Workflow
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              How it works
            </h2>
          </div>

          <div className="space-y-4">
            {project.howItWorks.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-2xl border border-border/60 bg-secondary/20 p-5"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border/60 text-sm font-semibold">
                  {index + 1}
                </div>

                <p className="pt-1 text-sm leading-7 text-muted-foreground">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Technology
            </p>

            <h2 className="mt-3 flex items-center gap-3 text-3xl font-semibold">
              <Code2 size={28} />
              Tech Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/60 bg-secondary/30 px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Technical Details */}
        {project.technicalDetails &&
          project.technicalDetails.length > 0 && (
            <section className="mb-16">
              <div className="mb-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Implementation
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Technical Details
                </h2>
              </div>

              <div className="space-y-3">
                {project.technicalDetails.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-2xl border border-border/60 bg-secondary/20 p-5 text-sm leading-7 text-muted-foreground"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* Limitations */}
        {project.limitations &&
          project.limitations.length > 0 && (
            <section className="mb-16">
              <div className="mb-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Scope
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Limitations
                </h2>
              </div>

              <div className="space-y-3">
                {project.limitations.map((limitation) => (
                  <div
                    key={limitation}
                    className="rounded-2xl border border-border/60 bg-secondary/20 p-5 text-sm leading-7 text-muted-foreground"
                  >
                    {limitation}
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Gallery
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Screenshots
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {project.screenshots.map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-2xl border border-border/60 bg-secondary/20"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="border-t border-border/60 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold">
                Interested in the project?
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Explore the source code and implementation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                <Github size={17} />
                View on GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium hover:bg-secondary/50"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}