import { ReactNode } from 'react';
export interface BadgeProps {
  children: ReactNode;
  tone?: 'neutral' | 'brand' | 'success' | 'danger' | 'warning';
}
export function Badge(props: BadgeProps): JSX.Element;
