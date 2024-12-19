import TodaySale from "./TodaySale";

function TodaySales() {
  return (
    <ul className="flex max-h-56 flex-col gap-3 overflow-y-auto">
      <TodaySale
        name="Miguel Martinez"
        price={22}
        beatName="Sola"
        licenseType="Exclusiva"
      />
      <TodaySale
        name="Clara Santos"
        price={44}
        beatName="Incomprendida"
        licenseType="Premium"
      />
      <TodaySale
        name="Felipe Aguilar"
        price={55}
        beatName="Tiempo"
        licenseType="Básica"
      />
    </ul>
  );
}

export default TodaySales;
