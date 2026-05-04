import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { education } from '@/data/content';
import { fadeUp, staggerContainer, viewportOnce } from '@/hooks/useScrollReveal';
import { pick } from '@/i18n';

export function Education() {
  const { t, i18n } = useTranslation();

  return (
    <section id="education" className="relative border-t border-border bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow={t('education.eyebrow')} title={t('education.title')} />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {education.map((item) => (
            <motion.div
              key={item.institution}
              variants={fadeUp}
              className="glow-on-hover group flex items-start gap-5 rounded-2xl border border-border bg-bg-elev p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-bg text-accent transition-all group-hover:border-accent">
                <GraduationCap size={20} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold leading-tight text-fg sm:text-xl">
                  {item.institution}
                </h3>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                  {pick(item.degree, i18n.language)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
