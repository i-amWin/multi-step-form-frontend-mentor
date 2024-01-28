import { useId } from "react";
import { cn } from "../../utils/cn";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
  isError?: boolean;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  isError = false,
}: InputProps) => {
  const id = useId();

  return (
    <div className="grid gap-0.5 text-sm">
      <label htmlFor={id} className="text-marine-blue font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className={cn(
          "border border-light-gray px-4 py-2 rounded focus:outline-none focus-visible:ring-[1.5px] focus-visible:ring-purplish-blue",
          isError && "ring-[1.5px] ring-strawberry-red",
          className
        )}
      />
    </div>
  );
};
