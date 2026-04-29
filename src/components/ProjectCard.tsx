import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ChevronDown, ExternalLink, Github } from 'lucide-react';
import { GlowChip } from './ui/GlowChip';
import { fadeUp } from '@/hooks/useScrollReveal';
import { pick } from '@/i18n';
import type { Project } from '@/data/content';

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const { t, i18n } = useTranslation();
  const [imgOk, setImgOk] = useState(true);

  const tagline = pick(project.tagline, i18n.language);
  const description = pick(project.description, i18n.language);
  const bullets = pick(project.bullets, i18n.language);
  const role = pick(project.role, i18n.language);

  return (
    <motion.article
      variants={fadeUp}
      className="group glow-on-hover relative flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elev"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-bg">
        {imgOk ? (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImgOk(false)}
            className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.04] ${
              project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'
            }`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bg via-bg-elev to-bg">
            <span className="font-display text-5xl font-extrabold text-accent/30">
              {project.name}
            </span>
          </div>
        )}
        {project.status === 'in-progress' && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {t('projects.inProgress')}
          </span>
        )}
      </div>

      <div className="flex flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-bold text-fg">{project.name}</h3>
              <span className="inline-flex items-center rounded-full border border-border-strong bg-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                {role}
              </span>
            </div>
            <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-accent">
              {tagline}
            </p>
          </div>
          <ChevronDown
            size={18}
            aria-hidden
            className="mt-1 shrink-0 text-fg-subtle transition-all duration-300 group-hover:rotate-180 group-hover:text-accent [@media(hover:none)]:hidden"
          />
        </div>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
              <p className="text-sm leading-relaxed text-fg-muted">{description}</p>

              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[13px] leading-relaxed text-fg-muted">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <GlowChip key={s} size="sm">
                    {s}
                  </GlowChip>
                ))}
              </div>

              {(project.links.demo || project.links.repo) && (
                <div className="flex flex-wrap gap-2">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-bg"
                    >
                      <ExternalLink size={12} />
                      {t('projects.viewLive')}
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <Github size={12} />
                      {t('projects.viewCode')}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
