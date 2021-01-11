import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect, HashRouter
} from "react-router-dom";
import "./App.scss";
import MainComponent from "./layout/MainComponent";
import { Page404 } from "./views/Error/Page404";

export let BASE_URL = process.env.API_BASE_URL;

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/admin" component={MainComponent}/>
          <Route component={Page404} />
          <Redirect from="/" to="/admin/license"/>
        </Switch>
      </HashRouter>
    </div>
  );
}

