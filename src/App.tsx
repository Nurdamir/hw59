import React from 'react';
import Films from "./components/Film/Films/Films";
import AllJokes from "./components/Jokes/AllJokes/AllJokes";

function App() {
  return (
    <>
    <div className="container mt-5 bg-info p-4 rounded-3">
      <Films/>
      <div className="container-fluid">




      <AllJokes/>
      </div>
    </div>
    </>
  );
}

export default App;
