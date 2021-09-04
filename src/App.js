// Amplify - Cognito
import Amplify from "aws-amplify";
import awsConfig from "./awsConfig";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import Artist from "./components/scripts/Artist";
import Contracts from "./components/scripts/Contracts";
import Songs from "./components/scripts/Songs";

Amplify.configure(awsConfig);

function App() {
  return (
    <div>
      {/* Sign in/ Sign out */}
      <div>
        <AmplifySignOut />
      </div>

      {/* Endpoints */}
      <h2 className="name-app">Music Investments</h2>
      <Artist />
      <Contracts />
      <Songs />
    </div>
  );
}

export default withAuthenticator(App);
