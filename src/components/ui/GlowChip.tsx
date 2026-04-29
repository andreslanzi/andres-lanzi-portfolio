import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'md';
};

export function GlowChip({ children, size = 'md' }: Props) {
  const sizeCls =
    size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs';
  return (
    <span
      className={`glow-on-hover inline-flex items-center rounded-full border border-border-strong bg-bg-elev font-mono uppercase tracking-wider text-fg-muted ${sizeCls}`}
    >
      {children}
    </span>
  );
}
