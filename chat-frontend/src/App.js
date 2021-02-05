import React from "react"
import { Route } from "react-router-dom";

import { Auth, Home } from "./pages";


function App() {
  return (
    <div className="App">
      <Route exact path={["/", "/signin", "/signup", "/signup/verify"]} component={Auth} />
      <Route path="/im" component={Home}/>
    </div>
  );
}

export default App;