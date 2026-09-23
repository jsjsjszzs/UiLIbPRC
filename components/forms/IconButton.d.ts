import { ReactNode } from 'react';
export interface IconButtonProps {
  icon: ReactNode;
  variant?: 'primary' | 'subtle' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  label: string;
}
export function IconButton(props: IconButtonProps): JSX.Element;
