import Map from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { useState, useEffect } from "react";

const useInitializeMap = () => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const mapInstance = new Map({
      target: "map",
      view: new View({
        center: fromLonLat([84.124, 28.3949]),
        zoom: 6.4,
      }),
    });

    setMap(mapInstance);
  }, []);

  return map;
};

export default useInitializeMap;
