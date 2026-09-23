import { ReactNode } from 'react';
export interface CardProps {
  children: ReactNode;
  padding?: string;
  raised?: boolean;
}
export function Card(props: CardProps): JSX.Element;
