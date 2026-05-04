import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function LangToggle() {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith('es') ? 'es' : 'en';

  const toggle = () => {
    const next = current === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('lang.switch')}
      title={t('lang.switch')}
      className="relative flex h-9 w-[72px] items-center rounded-full border border-border-strong bg-bg-elev px-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted transition-colors hover:border-accent/60"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="absolute top-1 h-7 w-8 rounded-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.5)]"
        style={{ left: current === 'es' ? 4 : 36 }}
      />
      <span
        className={`relative z-10 flex h-7 w-8 items-center justify-center rounded-full transition-colors ${current === 'es' ? 'text-bg' : ''}`}
      >
        ES
      </span>
      <span
        className={`relative z-10 flex h-7 w-8 items-center justify-center rounded-full transition-colors ${current === 'en' ? 'text-bg' : ''}`}
      >
        EN
      </span>
    </button>
  );
}
