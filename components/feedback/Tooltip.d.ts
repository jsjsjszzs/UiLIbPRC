import { ReactNode } from 'react';
export interface TooltipProps {
  children: ReactNode;
  label: string;
  side?: 'top' | 'bottom';
}
export function Tooltip(props: TooltipProps): JSX.Element;
