import { cva } from "class-variance-authority";
import cn from "../utils/cn";

function Button({ children, variant, size, align, margin, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, align, margin }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva(
  "rounded-md text-brand-50 font-medium transition-all",
  {
    variants: {
      variant: {
        primary: "bg-brand-600 hover:bg-brand-700",
        secondary: "bg-brand-500 hover:bg-brand-800",
        outline: "text-brand-100 border-2 border-brand-100 hover:bg-brand-500",
        danger: "bg-red-500 hover:bg-red-600",
      },
      size: {
        sm: "text-sm px-2.5 py-1",
        md: "text-base px-3.5 py-1",
        lg: "text-xl px-4 py-1.5",
      },
      align: {
        right: "ml-auto mr-0",
        left: "",
      },
      margin: {
        none: "",
        top: "mt-2",
        bottom: "mb-2",
        right: "mr-2",
        left: "ml-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      align: "left",
      padding: "none",
    },
  },
);

export default Button;
