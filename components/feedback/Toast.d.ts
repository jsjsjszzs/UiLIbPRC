export interface ToastProps {
  tone?: 'neutral' | 'success' | 'danger' | 'warning';
  title: string;
  description?: string;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
