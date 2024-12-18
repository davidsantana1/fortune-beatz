function Stat({ title, value, icon, color }) {
  return (
    <div className="flex items-center gap-5 rounded-md bg-brand-950 p-4">
      <div
        className={`rounded-full ${color} p-3 text-2xl md:text-3xl lg:text-5xl`}
      >
        {icon}
      </div>

      <div>
        <span className="text-xs font-bold text-slate-400">{title}</span>
        <p className="text-xl font-medium text-slate-200 md:text-2xl">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Stat;
