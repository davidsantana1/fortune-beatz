import { forwardRef } from "react";

const SelectInput = forwardRef(({ children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className="mb-4 block w-full rounded-md border-2 border-brand-700 bg-brand-50 px-2 py-1 text-brand-999 placeholder-slate-400 focus:border-brand-500 focus:caret-brand-800 focus:outline-none"
    >
      {children}
    </select>
  );
});

SelectInput.displayName = "SelectInput";

export default SelectInput;
