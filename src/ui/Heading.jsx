import { cva } from "class-variance-authority";
import cn from "../utils/cn";

function Heading({
  children,
  variant,
  size,
  color,
  margin,
  padding,
  casing,
  as = "h1",
}) {
  const H = as;

  return (
    <H
      className={cn(
        headingVariants({ variant, size, color, margin, padding, casing }),
      )}
    >
      {children}
    </H>
  );
}

const headingVariants = cva("", {
  variants: {
    color: {
      light: "text-brand-50",
      lighter: "text-gray-400",
      dark: "text-gray-700",
    },
    variant: {
      primary: "font-bold",
      secondary: "font-medium",
    },
    size: {
      xs: "text-xs",
      sm: "text-xl",
      md: "text-3xl",
      lg: "text-4xl",
    },
    margin: {
      regular: "mb-5",
      minimal: "mb-2",
      none: "mb-0",
    },
    padding: {
      none: "",
      regular: "p-4",
    },
    casing: {
      none: "",
      capitalize: "capitalize",
    },
  },
  defaultVariants: {
    variant: "primary",
    color: "light",
    size: "lg",
    margin: "regular",
    padding: "none",
    casing: "none",
  },
});

export default Heading;
