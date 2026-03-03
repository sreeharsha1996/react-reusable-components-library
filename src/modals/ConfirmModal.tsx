import BaseModal from './BaseModal';
import ModalActionButton from './ModalActionButton';
import type { ConfirmModalConfig } from './types';

interface Props {
  config: ConfirmModalConfig;
  onClose: () => void;
}

export default function ConfirmModal({ config, onClose }: Props) {
  const {
    title,
    message,
    icon = '⚠️',
    confirmButton,
    cancelButton,
    onConfirm,
    onCancel,
  } = config;

  function handleConfirm() {
    onConfirm();
    onClose();
  }

  function handleCancel() {
    onCancel?.();
    onClose();
  }

  return (
    <BaseModal onClose={handleCancel}>
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        {/* Header strip */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" />

        <div className="p-6 flex flex-col gap-5">
          {/* Icon + Close */}
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/20 flex items-center justify-center text-2xl">
              {icon}
            </div>
            <button
              onClick={handleCancel}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{message}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-1">
            <ModalActionButton
              label={cancelButton?.label ?? 'Cancel'}
              variant={cancelButton?.variant ?? 'ghost'}
              onClick={cancelButton?.onClick ?? handleCancel}
              icon={cancelButton?.icon}
            />
            <ModalActionButton
              label={confirmButton?.label ?? 'Confirm'}
              variant={confirmButton?.variant ?? 'danger'}
              onClick={confirmButton?.onClick ?? handleConfirm}
              icon={confirmButton?.icon}
            />
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
