import React, { useEffect, useState } from "react";
import "./index.scss";
import { YMaps, Map, Circle } from "react-yandex-maps";

const App = () => {
  const [mapData, setMapData] = useState({});
  useEffect(async () => {
    const fetched = await fetch(
      "https://gist.githubusercontent.com/Horhik/c6ef6f4087f4d01081456712a7e16eb7/raw/718d37c1d079b68d5a86cf03d99c4c3d7a0aa6d0/moscowAreas.geojson"
    );
    const data = await fetched.json();
    setMapData(data)
  }, []);
  return (
    <div>
      <YMaps>
        <Map
          className={"map"}
          defaultState={{ center: [55.76, 37.64], zoom: 10 }}
        >
        </Map>
      </YMaps>
    </div>
  );
};
export default App;
