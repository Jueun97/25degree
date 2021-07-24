import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./component/header/header";
import Section from "./component/section/section";
import Inform from "./component/user_inform/inform";

function App({ authService, getData }) {
  const [city, setCity] = useState("location");
  const changeCity = (cityData) => {
    setCity(cityData);
  };
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header authService={authService} changeCity={changeCity} />
            <Section getData={getData} city={city} />
          </Route>
          <Route exact path="/login">
            <Inform authService={authService} getData={getData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
