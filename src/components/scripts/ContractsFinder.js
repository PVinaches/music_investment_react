import "../styles/FormCards.css";
import Card from "./Card";

import getToken from "../../getToken";

import { useState } from "react";

const ContractsFinder = (props) => {
  // Declare contract
  const [enteredContract, setEnteredContract] = useState("");

  // Listen to the artist id input
  const contractChangeHandler = (event) => {
    setEnteredContract(event.target.value);
  };

  // Fetch all possible Ids calling Get contract IDs API endpoint
  const [allIds, setAllIds] = useState("");
  if (allIds.length === 0) {
    fetch("https://api-test.anotemusic.com/api/v1/contracts/ids/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        return setAllIds(response.result);
      });
  }

  // Listen to the submit button and call find contracts API endpoint
  const submitHandler = (event) => {
    event.preventDefault();

    const urlSearchContract =
      "https://api-test.anotemusic.com/api/v1/contracts/search/" +
      enteredContract;

    const searchContracts = (token) => {
      fetch(urlSearchContract, {
        method: "GET",
        headers: {
          authorization: token,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          const contracts = response.result;
          props.onSaveContractData(contracts);
        });
      setEnteredContract("");
    };

    getToken().then(searchContracts);
  };

  // Form card
  return (
    <div>
      <Card className="global-finder">
        <form className="finder" onSubmit={submitHandler}>
          <h3> Contracts Finder</h3>
          <div>
            <label>Enter the artist id</label>
          </div>
          <div>
            <label>Possible ids: </label>
            <label>
              {Object.values(allIds)
                .sort((a, b) => a - b)
                .map((value) => {
                  return "'" + value + "' ";
                })}
            </label>
          </div>
          <div>
            <input
              type="text"
              value={enteredContract}
              onChange={contractChangeHandler}
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

export default ContractsFinder;
