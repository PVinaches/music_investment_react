import "../styles/TableCards.css";
import Card from "./Card";

const ArtistInfo = (props) => {
  const artistInfo = props.artistFindData;

  // Check if the information has been retrieved
  if (artistInfo === null) {
    return null;
  }

  // Check if the artist is in the API database
  if (artistInfo === undefined) {
    return "Nothing found. Try other search.";
  }

  // Table with artist information
  return (
    <div>
      <Card className="global-info">
        <>
          {Object.keys(artistInfo).map((key) => {
            return (
              <table>
                <tr>
                  <td>Id</td>
                  <td>{artistInfo[key].id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{artistInfo[key].name}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{artistInfo[key].location}</td>
                </tr>
                <tr>
                  <td>Music type</td>
                  <td>{artistInfo[key].commaSeparatedTags}</td>
                </tr>
                <tr>
                  <td>Youtube</td>
                  <td>{artistInfo[key].youtubeUrl}</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>{artistInfo[key].twitterUrl}</td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>{artistInfo[key].instagramUrl}</td>
                </tr>
                <tr>
                  <td>Soundcloud</td>
                  <td>{artistInfo[key].soundcloudUrl}</td>
                </tr>
                <tr>
                  <td>Review</td>
                  <td>{artistInfo[key].ownReview}</td>
                </tr>
              </table>
            );
          })}
        </>
      </Card>
    </div>
  );
};

export default ArtistInfo;
