interface Option {
  value: string;
  label: string;
}

interface UiSelectProps {
  label: string;
  options: { value: string; label: string }[];
  name: string;
  selectedValue?: string;
  id?: string;
  className?: string;
  onChange?: (value: string) => void;
}
