import ArtistFinder from "./components/scripts/ArtistFinder";
import ArtistInfo from "./components/scripts/ArtistInfo";

function App() {
  return (
    <div>
      <h2 className="name-app">Music Investments</h2>
      <ArtistFinder />
      <ArtistInfo />
    </div>
  );
}

export default App;
