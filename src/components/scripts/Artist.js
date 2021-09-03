import ArtistFinder from "./ArtistFinder";
import ArtistInfo from "./ArtistInfo";

import { useState } from "react";

function Artist() {
  const [artistFinderData, setArtistFinderData] = useState(null);

  return (
    <div>
      <ArtistFinder onSaveArtistName={setArtistFinderData} />
      <ArtistInfo artistFindData={artistFinderData} />
    </div>
  );
}

export default Artist;
