import React from 'react';
import Films from "./components/Film/Films/Films";
import AllJokes from "./components/Jokes/AllJokes/AllJokes";

function App() {
  return (
    <>
    <div className="container mt-5 bg-info p-4 rounded-3">
      <div className="row mt-2">
        <div className="col border-end">
          <Films/>
        </div>
        <div className="col ms-4">
          <AllJokes/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
