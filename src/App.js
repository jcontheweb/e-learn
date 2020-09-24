import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// Pages
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="font-opensans mx-auto bg-white overflow-hidden" style={{ maxWidth: "1920px" }}>
        <Header />

        <Switch>
          <Route path="/">{<Home />}</Route>
          <Route path="/">{/* <Users /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
