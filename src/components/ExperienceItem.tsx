import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { fadeUp } from '@/hooks/useScrollReveal';
import { pick } from '@/i18n';
import type { Experience as ExperienceType } from '@/data/content';

type Props = { item: ExperienceType; index: number };

export function ExperienceItem({ item, index }: Props) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(index === 0);

  const role = pick(item.role, i18n.language);
  const period = pick(item.period, i18n.language);
  const mode = pick(item.mode, i18n.language);
  const summary = pick(item.summary, i18n.language);
  const bullets = pick(item.bullets, i18n.language);

  return (
    <motion.div variants={fadeUp} className="relative pl-8 sm:pl-12">
      <span className="absolute left-0 top-2 flex h-3 w-3 items-center justify-center sm:left-1">
        <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent/50" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
      </span>

      <div className="glow-on-hover overflow-hidden rounded-2xl border border-border bg-bg-elev">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-4 p-6 text-left"
          aria-expanded={open}
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-bold text-fg">{item.company}</h3>
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {role}
              </span>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
              <span>{period}</span>
              <span aria-hidden>·</span>
              <span>{mode}</span>
            </div>
          </div>
          <ChevronDown
            size={18}
            className={`mt-1 shrink-0 text-fg-muted transition-transform ${open ? 'rotate-180 text-accent' : ''}`}
          />
        </button>

        <div
          className={`grid transition-all duration-500 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border px-6 pb-6 pt-5">
              <p className="text-sm leading-relaxed text-fg-muted">{summary}</p>
              <ul className="mt-4 space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
