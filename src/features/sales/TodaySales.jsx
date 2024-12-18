import TodaySale from "./TodaySale";

function TodaySales() {
  return (
    <ul className="flex max-h-56 flex-col gap-3 overflow-y-auto">
      <TodaySale
        name="Miguel Martinez"
        flagUrl="https://em-content.zobj.net/source/apple/391/flag-dominican-republic_1f1e9-1f1f4.png"
        price={22}
        beatName="Sola"
      />
      <TodaySale
        name="Clara Santos"
        flagUrl="https://em-content.zobj.net/source/apple/391/flag-mexico_1f1f2-1f1fd.png"
        price={44}
        beatName="Incomprendida"
      />
      <TodaySale
        name="Felipe Aguilar"
        flagUrl="https://em-content.zobj.net/source/apple/391/flag-colombia_1f1e8-1f1f4.png"
        price={55}
        beatName="Tiempo"
      />
    </ul>
  );
}

export default TodaySales;
