import { forwardRef } from "react";

const Input = forwardRef(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      className="mb-4 block w-full rounded-md border-2 border-brand-700 bg-brand-50 px-2 py-1 text-brand-999 placeholder-slate-400 focus:border-brand-500 focus:caret-brand-800 focus:outline-none"
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
