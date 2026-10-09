import SpinnerMini from "../../ui/SpinnerMini";

function Stat({ title, value, icon, color, isLoading }) {
  return (
    <div className="flex items-center gap-5 rounded-md bg-brand-900 p-4">
      {isLoading && <SpinnerMini />}
      {!isLoading && (
        <>
          <div
            className={`rounded-full ${color} p-3 text-2xl md:text-3xl lg:text-5xl`}
          >
            {icon}
          </div>

          <div>
            <span className="text-xs font-bold uppercase text-brand-200">
              {title}
            </span>
            <p className="text-xl font-medium text-brand-50 md:text-2xl">
              {value}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Stat;
