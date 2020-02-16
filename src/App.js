import React, { useEffect, useState } from "react";
import "./index.scss";
import { YMaps, Map, Circle } from "react-yandex-maps";
import StarterPage from "./component/Start";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import YMap from "./component/maps/map";

const App = () => {
  // const [mapData, setMapData] = useState({});
  // useEffect(async () => {
  //   const fetched = await fetch(
  //     "https://gist.githubusercontent.com/Horhik/c6ef6f4087f4d01081456712a7e16eb7/raw/718d37c1d079b68d5a86cf03d99c4c3d7a0aa6d0/moscowAreas.geojson"
  //   );
  //   const data = await fetched.json();
  //   setMapData(data)
  // }, []);
  return (

      <BrowserRouter>

  <Switch>
    <Route path={'/districts'}>
      <YMap/>
    </Route>
    <Route path={'/'}>
      <StarterPage/>
    </Route>
  </Switch>
  </BrowserRouter>
  );
};
export default App;
