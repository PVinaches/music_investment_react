import SongsFinder from "./SongsFinder.js";
import SongsInfo from "./SongsInfo.js";

import { useState } from "react";

function Songs() {
  const [songsData, setSongData] = useState(null);

  return (
    <div>
      <SongsFinder onSaveSongsList={setSongData} />
      <SongsInfo songsCompleteData={songsData} />
    </div>
  );
}

export default Songs;
