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
      <img src="https://anotemusic.com/wp-content/uploads/2020/09/logo_standard_negative.svg" alt="ANote Music" className="logo" srcset="https://anotemusic.com/wp-content/uploads/2020/09/logo_standard_negative.svg 1x, https://anotemusic.com/wp-content/uploads/2020/09/logo_standard_negative.svg 2x"/>
      <Artist />
      <Contracts />
      <Songs />
    </div>
  );
}

export default withAuthenticator(App);
