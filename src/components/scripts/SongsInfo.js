import "../styles/ArtistInfo.css";
import Card from "./Card";

const SongsInfo = (props) => {
  const songsInfo = props.songsCompleteData;

  //   Check if the information has been retrieved
  if (songsInfo === undefined || songsInfo === null) {
    return null;
  }

  Object.keys(songsInfo).map((key) => {
    return (
      <tr>
        <td>{songsInfo[key].id}</td>
        <td>{songsInfo[key].soundcloudUrl}</td>
        <td>{songsInfo[key].commaSeparatedTags}</td>
        <td>{songsInfo[key].albumName}</td>
      </tr>
    );
  });

  //   Table with songs information
  return (
    <div>
      <Card className="global-artist-info">
        <table>
          <th>
            <td>Id</td>
            <td>Soundcloud</td>
            <td>Music type</td>
            <td>Album name</td>
          </th>
          <>
            {Object.keys(songsInfo).map((key) => {
              return (
                <tr>
                  <td>{songsInfo[key].id}</td>
                  <td>{songsInfo[key].soundcloudUrl}</td>
                  <td>{songsInfo[key].commaSeparatedTags}</td>
                  <td>{songsInfo[key].albumName}</td>
                </tr>
              );
            })}
          </>
        </table>
      </Card>
    </div>
  );
};

export default SongsInfo;