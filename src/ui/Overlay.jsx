function Overlay({ children }) {
  return (
    <div
      className="fixed left-0 top-0 z-50 h-screen w-full backdrop-blur-sm transition-all"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      {children}
    </div>
  );
}

export default Overlay;
