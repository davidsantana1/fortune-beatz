function Label({ children, ...props }) {
  return (
    <label
      className="mb-2 inline-block text-lg font-bold text-brand-50"
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
