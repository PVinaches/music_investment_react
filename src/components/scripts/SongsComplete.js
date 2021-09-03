import "../styles/ArtistFinder.css";
import Card from "./Card";

const SongsComplete = (props) => {

  //   Listen to the submit button and call find artists API endpoint
  const searchHandler = (event) => {
    event.preventDefault();

    const urlSearchAllSongs = "https://api-test.anotemusic.com/api/v1/songs";

    fetch(urlSearchAllSongs, {
      method: "GET",
      headers: {
        authorization:
          "INSERT KEY",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const allSongs = response.result;
        props.onSaveSongsList(allSongs);
      });
  };

  //   Search button card
  return (
    <div>
      <Card className="global-artist-finder">
        <button onClick={searchHandler}>Show all songs</button>
      </Card>
    </div>
  );
};

export default SongsComplete;
