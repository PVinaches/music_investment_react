import "../styles/ArtistInfo.css";
import Card from "./Card";

const ContractInfo = (props) => {
  const contractInfo = props.contractFindData;

  //   Check if the information has been retrieved
  if (contractInfo === null) {
    return null;
  }
  if (contractInfo === undefined) {
    return "Nothing found. Try other search.";
  }

  //   Table with contract information
  return (
    <div>
      <Card className="global-artist-info">
        <>
          {Object.keys(contractInfo).map((key) => {
            return (
              <table>
                <tr>
                  <td>Id</td>
                  <td>{contractInfo[key].id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{contractInfo[key].name}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{contractInfo[key].location}</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>{contractInfo[key].currency}</td>
                </tr>
                <tr>
                  <td>Amount when created</td>
                  <td>{contractInfo[key].amountCreated}</td>
                </tr>
                <tr>
                  <td>Amount raised</td>
                  <td>{contractInfo[key].amountRaised}</td>
                </tr>
                <tr>
                  <td>Sales last year</td>
                  <td>{contractInfo[key].salesLastYear}</td>
                </tr>
              </table>
            );
          })}
        </>
      </Card>
    </div>
  );
};

export default ContractInfo;
