import Map from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { useState, useEffect } from "react";

type InitializeMapProps = {
  center: number[];
  zoom: number;
}
const useInitializeMap = ({ center, zoom }: InitializeMapProps) => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const mapInstance = new Map({
      target: "map",
      layers: [],
      view: new View({
        center: fromLonLat(center),
        zoom
      }),
    });

    setMap(mapInstance);

    return () => {
      if (map) {
        setMap(null)
      }
    }

  }, []);

  return map;
};

export default useInitializeMap;
