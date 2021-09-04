// Amplify - Cognito
import { Auth } from "aws-amplify";

// Retrieve token from cognito
async function getToken() {
  const user = await Auth.currentAuthenticatedUser({
    bypassCache: false,
  });
  const token = user.signInUserSession.accessToken.jwtToken;
  return token;
}

export default getToken;
