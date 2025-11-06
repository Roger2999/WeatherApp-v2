import type { ReactNode } from "react";

interface SelectProps extends React.ComponentProps<"select"> {
  title: string;
  className?: string | undefined;
  children: ReactNode;
}

export const Select = ({
  title,
  className,
  children,
  ...props
}: SelectProps) => {
  const baseStyles = "bg-slate-800 border border-slate-700 rounded-lg p-2 mt-1";
  return (
    <>
      <label htmlFor={title} className="flex flex-col">
        <span className="text-sm text-slate-400">{title}</span>
        <select id={title} className={`${baseStyles} ${className}`} {...props}>
          {children}
        </select>
      </label>
    </>
  );
};
