export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
}
export function Select(props: SelectProps): JSX.Element;
