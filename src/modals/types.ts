// ============================================================
// Modal Types — all dynamic config lives here
// ============================================================

export type ButtonVariant = 'primary' | 'danger' | 'success' | 'ghost' | 'warning';

export interface ModalButton {
  label: string;
  variant?: ButtonVariant;
  onClick: () => void;
  icon?: string; // emoji or text icon
  disabled?: boolean;
}

// --- Confirm Modal ---
export interface ConfirmModalConfig {
  type: 'confirm';
  title: string;
  message: string;
  icon?: string;
  confirmButton?: Partial<ModalButton>;
  cancelButton?: Partial<ModalButton>;
  onConfirm: () => void;
  onCancel?: () => void;
}

// --- Error Modal ---
export interface ErrorModalConfig {
  type: 'error';
  title?: string;
  error: string;
  details?: string;
  actions?: ModalButton[];
  onClose?: () => void;
}

// --- Data Modal ---
export interface DataField {
  label: string;
  value: string | number | boolean | null;
  badge?: boolean;
  badgeColor?: string;
}

export interface DataModalConfig {
  type: 'data';
  title: string;
  subtitle?: string;
  data: DataField[];
  actions?: ModalButton[];
  onClose?: () => void;
}

export type ModalConfig = ConfirmModalConfig | ErrorModalConfig | DataModalConfig;
