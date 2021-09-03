import SongsComplete from "./SongsComplete.js";
import SongsInfo from "./SongsInfo.js";

import { useState } from "react";

function Songs() {
  const [songsData, setSongData] = useState(null);

  return (
    <div>
      <SongsComplete onSaveSongsList={setSongData} />
      <SongsInfo songsCompleteData={songsData} />
    </div>
  );
}

export default Songs;