import type { ButtonVariant, ModalButton } from './types';

interface ButtonProps extends ModalButton {
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500 shadow-lg shadow-indigo-500/20',
  danger:  'bg-rose-600 hover:bg-rose-500 text-white border border-rose-500 shadow-lg shadow-rose-500/20',
  success: 'bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400 shadow-lg shadow-emerald-500/20',
  warning: 'bg-amber-500 hover:bg-amber-400 text-white border border-amber-400 shadow-lg shadow-amber-400/20',
  ghost:   'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10',
};

export default function ModalActionButton({
  label,
  variant = 'primary',
  onClick,
  icon,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
        text-sm font-semibold tracking-wide transition-all duration-150
        active:scale-95 cursor-pointer
        disabled:opacity-40 disabled:cursor-not-allowed
        ${fullWidth ? 'w-full' : ''}
        ${variantStyles[variant]}
      `}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
