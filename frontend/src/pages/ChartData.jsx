import RadarChartFight from "../components/Charts";
import FightCreated from "../components/FightCreated";

export default function ChartData() {
  return (
    <header className="App-header flex">
      <div className=" flex mt-10">
        <div className="flex flex-row ">
          <FightCreated />
          <RadarChartFight />
        </div>
      </div>
    </header>
  );
}
