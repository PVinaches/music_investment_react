import "../styles/ArtistFinder.css";
import Card from "./Card";

import { useState } from "react";

const ContractsFinder = (props) => {
  // Declare contract
  const [enteredContract, setEnteredContract] = useState("");

  //   Listen to the artist id input
  const contractChangeHandler = (event) => {
    setEnteredContract(event.target.value);
  };

  //   Listen to the submit button and call find contracts API endpoint
  const submitHandler = (event) => {
    event.preventDefault();

    const urlSearchSinger =
      "https://api-test.anotemusic.com/api/v1/contracts/search/" +
      enteredContract;

    fetch(urlSearchSinger, {
      method: "GET",
      headers: {
        authorization:
          "INSERT KEY",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const contracts = response.result;
        props.onSaveContractData(contracts);
      });
    setEnteredContract("");
  };

  //   Form card
  return (
    <div>
      <Card className="global-artist-finder">
        <form className="artist-finder" onSubmit={submitHandler}>
          <h3> Contracts Finder</h3>
          <div>
            <label>Enter the artist name or id</label>
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
