function ModalButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="hover:text-brand-500 text-brand-50 absolute right-8 top-5 translate-x-3 rounded-sm border-none p-1 text-3xl transition-all"
      style={{ background: "none" }}
    >
      {children}
    </button>
  );
}

export default ModalButton;
