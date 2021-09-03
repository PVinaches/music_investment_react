import Artist from "./components/scripts/Artist";
import Songs from "./components/scripts/Songs.js"

// import { useState } from "react";

function App() {

  return (
    <div>
      <h2 className="name-app">Music Investments</h2>
      <Artist />
      <Songs />
    </div>
  );
}

export default App;