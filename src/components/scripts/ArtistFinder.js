import "../styles/ArtistFinder.css";
import Card from "./Card";

import { useState } from "react";

const ArtistFinder = () => {
  // Declare artist name
  const [enteredArtist, setEnteredArtist] = useState("");

  //   Listen to the artist name input
  const artistChangeHandler = (event) => {
    setEnteredArtist(event.target.value);
  };

  //   Listen to the submit button and call find artists API endpoint
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredArtist);

    const urlSearchSinger =
      "https://api-test.anotemusic.com/api/v1/artists/search/" + enteredArtist;

    fetch(urlSearchSinger, {
      method: "GET",
      headers: {
        authorization: "INSERT KEY",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const totalNumberArtists = response.result.length;
        if (!totalNumberArtists) {
          return console.log("Nothing found");
        }
        for (let i = 0; i < totalNumberArtists; i++) {
          console.log(response.result[i]);
        }
        return console.log("done");
      });
    setEnteredArtist("");
  };

  //   Form card
  return (
    <div>
      <Card className="global-artist-finder">
        <form className="artist-finder" onSubmit={submitHandler}>
          <div>
            <label>Enter the artist name</label>
          </div>
          <div>
            <input
              type="text"
              value={enteredArtist}
              onChange={artistChangeHandler}
            />
          </div>
          <div>
            <button>Search</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ArtistFinder;
