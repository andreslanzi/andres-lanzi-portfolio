import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/content';
import { fadeUp, staggerContainer } from '@/hooks/useScrollReveal';
import { pick } from '@/i18n';

export function Hero() {
  const { t, i18n } = useTranslation();
  const role = pick(profile.role, i18n.language);
  const focus = pick(profile.focus, i18n.language);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-bg pt-16"
    >
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div aria-hidden className="absolute inset-0 bg-radial-accent" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.1)}
          className="flex flex-col gap-7"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t('hero.available')}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-fg sm:text-7xl md:text-[88px]"
          >
            {profile.name}
            <span className="block text-fg-subtle">/</span>
            <span className="block bg-gradient-to-r from-accent via-accent to-accent-dim bg-clip-text pb-2 leading-[1.05] text-transparent">
              {role}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="-mt-2 font-display text-2xl font-semibold leading-tight text-fg-muted sm:text-3xl md:text-4xl"
          >
            <span className="text-accent">/</span> {focus}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="caret-blink max-w-2xl font-mono text-sm text-fg-subtle sm:text-base"
          >
            {role} · {focus}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-bg transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              {t('hero.viewProjects')}
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-elev px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-fg transition-all hover:border-accent hover:text-accent"
            >
              {t('hero.getInTouch')}
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle"
          >
            <span className="h-px w-10 bg-border-strong" />
            {profile.location}
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle hover:text-accent md:flex"
      >
        <span>{t('hero.scroll')}</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border-strong p-1">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}
