import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { profile } from '@/data/content';
import { fadeUp, staggerContainer, viewportOnce } from '@/hooks/useScrollReveal';
import { pick } from '@/i18n';

export function About() {
  const { t, i18n } = useTranslation();
  const bio = pick(profile.bio, i18n.language);

  return (
    <section id="about" className="relative border-t border-border bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow={t('about.eyebrow')} title={t('about.title')} />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-10 md:grid-cols-[1.6fr_1fr]"
        >
          <motion.p
            variants={fadeUp}
            className="text-balance text-lg leading-relaxed text-fg-muted sm:text-xl"
          >
            {bio}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="glow-on-hover flex flex-col divide-y divide-border rounded-2xl border border-border bg-bg-elev p-2"
          >
            <InfoRow icon={<MapPin size={14} />} label={t('about.locationLabel')} value={profile.location} />
            <InfoRow
              icon={<Mail size={14} />}
              label={t('about.emailLabel')}
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <InfoRow
              icon={<Github size={14} />}
              label={t('about.githubLabel')}
              value={shortUrl(profile.github)}
              href={profile.github}
              external
            />
            <InfoRow
              icon={<Linkedin size={14} />}
              label={t('about.linkedinLabel')}
              value={shortUrl(profile.linkedin)}
              href={profile.linkedin}
              external
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-bg-hover">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border-strong bg-bg text-accent">
          {icon}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
          {label}
        </span>
      </div>
      <span className="truncate font-mono text-xs text-fg" title={value}>
        {value}
      </span>
    </div>
  );

  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}

function shortUrl(url: string) {
  return url.replace(/^https?:\/\//, '');
}
