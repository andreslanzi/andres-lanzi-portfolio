import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/content';
import { staggerContainer, viewportOnce } from '@/hooks/useScrollReveal';

export function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="relative border-t border-border bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow={t('projects.eyebrow')} title={t('projects.title')} />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
