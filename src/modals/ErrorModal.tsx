import BaseModal from './BaseModal';
import ModalActionButton from './ModalActionButton';
import type { ErrorModalConfig } from './types';

interface Props {
  config: ErrorModalConfig;
  onClose: () => void;
}

export default function ErrorModal({ config, onClose }: Props) {
  const {
    title = 'Something went wrong',
    error,
    details,
    actions,
    onClose: configOnClose,
  } = config;

  function handleClose() {
    configOnClose?.();
    onClose();
  }

  return (
    <BaseModal onClose={handleClose}>
      <div className="bg-slate-900 border border-rose-500/20 rounded-2xl overflow-hidden">
        {/* Header strip */}
        <div className="h-1 w-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400" />

        <div className="p-6 flex flex-col gap-5">
          {/* Icon + Close */}
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-400/20 flex items-center justify-center text-2xl">
              🚨
            </div>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
          </div>

          {/* Error message */}
          <div className="bg-rose-950/40 border border-rose-500/20 rounded-xl px-4 py-3">
            <p className="text-rose-300 text-sm font-mono leading-relaxed break-words">{error}</p>
          </div>

          {/* Details (optional) */}
          {details && (
            <details className="group">
              <summary className="cursor-pointer text-xs text-slate-500 hover:text-slate-300 transition-colors select-none">
                Show details
              </summary>
              <div className="mt-2 bg-slate-800/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-400 font-mono leading-relaxed break-all">
                {details}
              </div>
            </details>
          )}

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-1">
            {actions && actions.length > 0 ? (
              actions.map((btn, i) => (
                <ModalActionButton key={i} {...btn} />
              ))
            ) : (
              <ModalActionButton
                label="Dismiss"
                variant="danger"
                onClick={handleClose}
                icon="✕"
              />
            )}
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
