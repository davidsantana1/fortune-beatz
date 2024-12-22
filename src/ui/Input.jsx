import { forwardRef } from "react";

const Input = forwardRef(({ noMargin, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`${!noMargin ? "mb-4" : "mb-0"} block w-full rounded-md border-2 border-brand-700 bg-brand-50 px-2 py-1 text-brand-999 placeholder-slate-400 focus:border-brand-500 focus:caret-brand-800 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-300`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
