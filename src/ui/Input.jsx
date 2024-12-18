import { forwardRef } from "react";

const Input = forwardRef(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      className="mb-4 block w-full rounded-md border-2 border-brand-700 bg-brand-900 px-2 py-1 text-brand-50 placeholder-brand-700 focus:border-brand-300 focus:caret-brand-100 focus:outline-none"
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
