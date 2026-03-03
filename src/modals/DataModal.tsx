import BaseModal from './BaseModal';
import ModalActionButton from './ModalActionButton';
import type { DataModalConfig, DataField } from './types';

interface Props {
  config: DataModalConfig;
  onClose: () => void;
}

function formatValue(value: DataField['value']): string {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return String(value);
}

export default function DataModal({ config, onClose }: Props) {
  const {
    title,
    subtitle,
    data,
    actions,
    onClose: configOnClose,
  } = config;

  function handleClose() {
    configOnClose?.();
    onClose();
  }

  return (
    <BaseModal onClose={handleClose} maxWidth="max-w-lg">
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        {/* Header strip */}
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

        {/* Header */}
        <div className="px-6 pt-6 pb-0 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center text-xl">
              📋
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">{title}</h2>
              {subtitle && <p className="text-slate-500 text-xs mt-0.5">{subtitle}</p>}
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Data rows */}
        <div className="p-6 flex flex-col gap-1">
          <div className="bg-slate-800/50 border border-white/5 rounded-xl overflow-hidden divide-y divide-white/5">
            {data.map((field, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-white/3 transition-colors">
                <span className="text-slate-400 text-sm font-medium">{field.label}</span>
                {field.badge ? (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: field.badgeColor ? `${field.badgeColor}22` : '#4f46e522',
                      color: field.badgeColor ?? '#818cf8',
                      border: `1px solid ${field.badgeColor ?? '#4f46e5'}44`,
                    }}
                  >
                    {formatValue(field.value)}
                  </span>
                ) : (
                  <span className="text-white text-sm font-semibold text-right max-w-[60%] break-words">
                    {formatValue(field.value)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        {(actions && actions.length > 0) && (
          <div className="px-6 pb-6 flex gap-3 justify-end">
            {actions.map((btn, i) => (
              <ModalActionButton key={i} {...btn} />
            ))}
          </div>
        )}
      </div>
    </BaseModal>
  );
}
