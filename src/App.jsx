import React from "react";
import Sidebar from "./component/Sidebar";
import Player from "./component/Player";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
      <Player />
    </div>
  );
}

export default App;
