import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/content';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-fg">{profile.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-fg-subtle">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border-strong bg-bg-elev text-fg-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border-strong bg-bg-elev text-fg-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border-strong bg-bg-elev text-fg-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
          © {year} · {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
