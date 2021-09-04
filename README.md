## UI for AnoteMusic REST test API (ReactJS)

<div style="text-align: justify">
    This mobile-responsive UI in ReactJS implemented four endpoints from the AnoteMusic test API (find artists, get contract ids, find a contract, find songs). Besides, it is integrated with Cognito (Amplify), and the CSS style includes flexbox.
</div>

#### Requirements

* node v.14.17.6
* reactjs v.17.0.2

#### Usage

- npm install
- npm start

##### Files description

- App.js, awsConfig.js

<div style="text-align: justify">
    Authentication with username and password via Cognito appears first. For this, it imports the information needed from awsConfig.js. Once the user authenticates, the logo image and three different main cards (Artist, Contracts and Songs) appear. They are found in "scripts".
    <br></br>
</div>

- scripts

<div style="text-align: justify">
    There are four types of scripts. The first one is a generic script, Card, imported in the others as a standardization of the card model employed. Then, the other three types are organized as follows: the main card (Artist, Contracts and Songs) connects with a finder script fetching the information from the API and an info script showing the query results. ContractsFinder is an exception as it fetches the contracts ids to facilitate the data introduction.
    <br></br>
</div>

- getToken.js

<div style="text-align: justify">
    The information showed in the info scripts needs a Cognito token to be accessed. So, this file contains the code to fetch that token. Then, this function is used by the finder scripts.
    <br></br>
</div>

- styles

<div style="text-align: justify">
    A general css file, index.css, resets the browser properties and defines the initial styles and variables. The other css files import this file. Besides, Card.css is shared by all the scripts. Form and Button css are related to finder scripts, depending on the rendering described. Lastly, the table style is shared by all the info scripts.
    <br></br>
</div>