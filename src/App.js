import Artist from "./components/scripts/Artist";
import Contracts from "./components/scripts/Contracts";
import Songs from "./components/scripts/Songs";

function App() {
  return (
    <div>
      <h2 className="name-app">Music Investments</h2>
      <Artist />
      <Contracts />
      <Songs />
    </div>
  );
}

export default App;
