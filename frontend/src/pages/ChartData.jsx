import RadarChartFight from "../components/Charts";
import AddFighter from "../components/AddFighter";

export default function ChartData() {
  return (
    <header className="App-header">
      <div className=" flex mt-10">
        <AddFighter />
        <RadarChartFight />
      </div>
    </header>
  );
}
