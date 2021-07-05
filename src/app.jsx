import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./component/header/header";
import Inform from "./component/user_inform/inform";

<<<<<<< Updated upstream
function App() {
  return <h1>hello world</h1>;
=======
function App({ authService, getData }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header authService={authService} />
          </Route>
          <Route exact path="/login">
            <Inform authService={authService} getData={getData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
