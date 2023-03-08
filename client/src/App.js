import React, { useState } from "react";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const [musicNumber, setMusicNumber] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="shape shape-1 "></div>
      <div className="shape shape-2 "></div>
      <div className="shape shape-3 "></div>
      <main>
        <Card
          musicNumber={musicNumber}
          setMusicNumber={setMusicNumber}
          open={open}
          setOpen={setOpen}
        />
        <List
          open={open}
          setOpen={setOpen}
          musicNumber={musicNumber}
          setMusicNumber={setMusicNumber}
        />
      </main>
    </div>
  );
}

export default App;
