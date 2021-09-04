import "../styles/FormCards.css";
import Card from "./Card";

import getToken from "../../getToken";

import { useState } from "react";

const ArtistFinder = (props) => {
  // Declare artist name
  const [enteredArtist, setEnteredArtist] = useState("");

  // Listen to the artist name input
  const artistChangeHandler = (event) => {
    setEnteredArtist(event.target.value);
  };

  // Listen to the submit button and call find artists API endpoint
  const submitHandler = (event) => {
    event.preventDefault();

    const urlSearchSinger =
      "https://api-test.anotemusic.com/api/v1/artists/search/" + enteredArtist;

    const searchArtists = (token) => {
      fetch(urlSearchSinger, {
        method: "GET",
        headers: {
          authorization: token,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          const findings = response.result;
          props.onSaveArtistName(findings);
        });
      setEnteredArtist("");
    };

    getToken().then(searchArtists);
  };

  // Form card
  return (
    <div>
      <Card className="global-finder">
        <form className="finder" onSubmit={submitHandler}>
          <h3> Artists Finder</h3>
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
