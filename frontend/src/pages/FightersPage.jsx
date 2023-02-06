import AddFighter from "../components/AddFighter";
import FightersCard from "../components/FightersCard";

export default function Home() {
  return (
    <header className="App-header flex justify-center">
      <div className="flex flex-col justify-center">
        <AddFighter />
        <FightersCard />
      </div>
    </header>
  );
}
