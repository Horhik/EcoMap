import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {YMaps, Map, Polygon} from "react-yandex-maps";
const YMap = (props) => {
    const [mapData, setMapData] = useState([])
    const [fillColor, setFillColor] = useState('#00FF00');
    useEffect(async () => {
        const fetching = await fetch('https://eco-map.herokuapp.com/districts')
        const data = await fetching.json();
        setMapData(data)

    }, [])
    return(
        <div>
            <YMaps>
              <Map
                className={"map"}
                defaultState={{ center: [55.76, 37.64], zoom: 10 }}
              >
                  {mapData.map((area, index) => {
                        console.log(index)
                      return(
                      <Polygon
                          key={index}
                          onMouseOver={() => setFillColor('#0f0')}
                          onHover={() => setFillColor('#f00')}
                          geometry={area.geo_data.coordinates}
                          options={{
                              fillColor: fillColor,
                              strokeColor: '#0000FF',
                              opacity: 0.5,
                              strokeWidth: 5,
                              strokeStyle: 'shortdash',
                          }}
                      />
                      )
                  })}

              </Map>
            </YMaps>

            </div>
    )
}

export default connect()(YMap)