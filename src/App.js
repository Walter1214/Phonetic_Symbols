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
        <Route strict sensitive path="/Phonetic_Symbols" component={Home} />
        <Redirect push from="/" to="/Phonetic_Symbols" />
      </Switch>
    </>
  );
}

export default App;
