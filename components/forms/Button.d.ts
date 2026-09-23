import { ReactNode } from 'react';
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'subtle' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}
export function Button(props: ButtonProps): JSX.Element;
