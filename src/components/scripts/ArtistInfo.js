import "../styles/ArtistInfo.css";
import Card from "./Card";

const ArtistInfo = (props) => {
  const artistInfo = props.artistFindData;

  //   Check if the information has been retrieved
  if (artistInfo === null) {
    return null;
  }

  //   Check if the artist is in the API database
  if (artistInfo === undefined) {
    return "Nothing found. Try other search.";
  }

  // Create object with the artist information to construct the table
  const artistDict = {
    Id: artistInfo[0].id,
    Name: artistInfo[0].name,
    Country: artistInfo[0].location,
    "Music type": artistInfo[0].commaSeparatedTags,
    Youtube: artistInfo[0].youtubeUrl,
    Twitter: artistInfo[0].twitterUrl,
    Instagram: artistInfo[0].instagramUrl,
    Soundcloud: artistInfo[0].soundcloudUrl,
    Review: artistInfo[0].ownReview,
  };

  //   Table with artist information
  return (
    <div>
      <Card className="global-artist-info">
        <table>
          <>
            {Object.keys(artistDict).map((key) => {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{artistDict[key]}</td>
                </tr>
              );
            })}
          </>
        </table>
      </Card>
    </div>
  );
};

export default ArtistInfo;
