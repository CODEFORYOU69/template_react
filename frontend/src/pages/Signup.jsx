import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <header className="App-header">
      <Navbar />
      <Welcome />
    </header>
  );
}
