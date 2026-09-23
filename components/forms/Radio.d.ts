export interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}
export function Radio(props: RadioProps): JSX.Element;
