import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./component/header/header";
import Section from "./component/section/section";
import Inform from "./component/user_inform/inform";
import ContactUs from "./service/emailjs";

function App({ authService, getData }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header authService={authService} />
            <Section getData={getData} />
            <ContactUs getData={getData} />
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
