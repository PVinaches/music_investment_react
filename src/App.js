import ArtistFinder from "./components/scripts/ArtistFinder";
import ArtistInfo from "./components/scripts/ArtistInfo";

import { useState } from "react";

function App() {
  const [artistFinderData, setArtistFinderData] = useState(null);

  return (
    <div>
      <h2 className="name-app">Music Investments</h2>
      <ArtistFinder onSaveArtistName={setArtistFinderData} />
      <ArtistInfo artistFindData={artistFinderData} />
    </div>
  );
}

export default App;