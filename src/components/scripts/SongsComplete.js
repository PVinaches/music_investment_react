import "../styles/ButtonCards.css";
import Card from "./Card";

const SongsComplete = (props) => {
  //   Listen to the submit button and call find songs API endpoint
  const searchHandler = (event) => {
    event.preventDefault();

    const urlSearchAllSongs = "https://api-test.anotemusic.com/api/v1/songs";

    fetch(urlSearchAllSongs, {
      method: "GET",
      headers: {
        authorization: "INSERT KEY",
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
      <Card className="global">
        <div>
          <h3> Songs Listing</h3>
          <button onClick={searchHandler}>Show all songs</button>
        </div>
      </Card>
    </div>
  );
};

export default SongsComplete;
