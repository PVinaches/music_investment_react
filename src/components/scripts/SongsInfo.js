import "../styles/TableCards.css";
import Card from "./Card";

const SongsInfo = (props) => {
  const songsInfo = props.songsCompleteData;

  // Check if the information has been retrieved
  if (songsInfo === undefined || songsInfo === null) {
    return null;
  }

  // Table with songs information
  return (
    <div>
      <Card className="global-info">
        <table>
          <tr>
            <th>Id</th>
            <th>Music type</th>
            <th>Album name</th>
          </tr>
          <>
            {Object.keys(songsInfo).map((key) => {
              return (
                <tr>
                  <td>{songsInfo[key].id}</td>
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
