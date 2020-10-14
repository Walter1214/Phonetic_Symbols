import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "@loadable/component";

const loading = () => {
  return <div>Loading...</div>;
};

const Home = Loadable(() => import("./js/views/home"), {
  loading,
});

function App() {
  return (
    <>
      <Switch>
        <Route strict sensitive path="/home" component={Home} />
        <Redirect push from="/" to="/home" />
      </Switch>
    </>
  );
}

export default App;
