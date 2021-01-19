import React from "react"
import { Route } from "react-router-dom";

import { Auth } from "./pages";


function App() {
  return (
    <div className="App">
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
    </div>
  );
}

export default App;