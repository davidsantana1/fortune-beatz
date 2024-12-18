function FormError({ error }) {
  if (!error) return null;

  return <span className="mb-2 text-sm text-red-500">{error}</span>;
}

export default FormError;
