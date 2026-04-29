import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './ui/SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { experience } from '@/data/content';
import { staggerContainer, viewportOnce } from '@/hooks/useScrollReveal';

export function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="relative border-t border-border bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow={t('experience.eyebrow')} title={t('experience.title')} />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-12 space-y-6 before:absolute before:left-[5px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-border-strong before:to-transparent sm:before:left-[7px]"
        >
          {experience.map((item, i) => (
            <ExperienceItem key={item.company} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
