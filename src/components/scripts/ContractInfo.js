import "../styles/TableCards.css";
import Card from "./Card";

const ContractInfo = (props) => {
  const contractInfo = props.contractFindData;

  // Check if the information has been retrieved
  if (contractInfo === null) {
    return null;
  }
  if (contractInfo === undefined) {
    return "Nothing found. Try other search.";
  }

  // Table with contract information
  return (
    <div>
      <Card className="global-info">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount when created</th>
            <th>Amount raised</th>
            <th>Sales last year</th>
          </tr>
          <>
            {Object.keys(contractInfo).map((key) => {
              return (
                <tr>
                  <td>{contractInfo[key].id}</td>
                  <td>{contractInfo[key].name}</td>
                  <td>{contractInfo[key].amountCreated}</td>
                  <td>{contractInfo[key].amountRaised}</td>
                  <td>{contractInfo[key].salesLastYear}</td>
                </tr>
              );
            })}
          </>
        </table>
      </Card>
    </div>
  );
};

export default ContractInfo;
