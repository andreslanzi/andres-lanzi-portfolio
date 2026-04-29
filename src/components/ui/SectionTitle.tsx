import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/hooks/useScrollReveal';

type Props = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, align = 'left' }: Props) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={align === 'center' ? 'text-center' : ''}
    >
      <motion.div
        variants={fadeUp}
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-accent/60" />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-[1.1] text-fg sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
