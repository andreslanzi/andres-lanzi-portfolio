import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './ui/SectionTitle';
import { GlowChip } from './ui/GlowChip';
import { skills } from '@/data/content';
import { fadeUp, staggerContainer, viewportOnce } from '@/hooks/useScrollReveal';

export function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="relative border-t border-border bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow={t('skills.eyebrow')} title={t('skills.title')} />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="glow-on-hover rounded-2xl border border-border bg-bg-elev p-6"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                <h3 className="font-display text-base font-semibold text-fg">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <GlowChip key={item}>{item}</GlowChip>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
