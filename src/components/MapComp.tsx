import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { useEffect } from "react";

const MapComp = () => {
  useEffect(() => {
    new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map",
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return <div id="map" className="w-full h-96 bg-gray-50"></div>;
};

export default MapComp;
