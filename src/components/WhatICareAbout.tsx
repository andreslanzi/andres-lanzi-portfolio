import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Gauge, Rocket, Sparkles, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { values } from '@/data/content';
import { fadeUp, staggerContainer, viewportOnce } from '@/hooks/useScrollReveal';
import { pick } from '@/i18n';

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  gauge: Gauge,
  rocket: Rocket,
  zap: Zap,
};

export function WhatICareAbout() {
  const { t, i18n } = useTranslation();

  return (
    <section id="values" className="relative border-t border-border bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow={t('values.eyebrow')} title={t('values.title')} />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {values.map((v) => {
            const Icon = iconMap[v.iconKey];
            return (
              <motion.div
                key={v.iconKey}
                variants={fadeUp}
                className="glow-on-hover group flex items-center gap-5 rounded-2xl border border-border bg-bg-elev p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-bg text-accent transition-all group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(57,255,20,0.35)]">
                  <Icon size={20} />
                </span>
                <p className="font-display text-lg font-semibold text-fg sm:text-xl">
                  {pick(v.title, i18n.language)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
