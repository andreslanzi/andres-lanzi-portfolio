import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangToggle } from './LangToggle';
import { profile } from '@/data/content';

const sections = ['about', 'skills', 'projects', 'experience'] as const;

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/75 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border-strong bg-bg-elev font-display text-sm font-bold text-accent transition-colors group-hover:border-accent">
            {profile.initials}
          </span>
          <span className="font-display text-sm font-semibold text-fg">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-fg-muted transition-colors hover:text-accent"
              >
                {t(`nav.${s}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border-strong bg-bg-elev text-fg-muted md:hidden"
          >
            <span aria-hidden className="flex flex-col gap-1">
              <span className={`block h-0.5 w-4 bg-current transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`block h-0.5 w-4 bg-current transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 sm:px-8">
            {sections.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-mono text-sm uppercase tracking-wider text-fg-muted hover:bg-bg-hover hover:text-accent"
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
