import ContractsFinder from "./ContractsFinder";
import ContractInfo from "./ContractInfo";

import { useState } from "react";

function Contracts() {
  const [contractFinderData, setContractFinderData] = useState(null);

  return (
    <div>
      <ContractsFinder onSaveContractData={setContractFinderData} />
      <ContractInfo contractFindData={contractFinderData} />
    </div>
  );
}

export default Contracts;
