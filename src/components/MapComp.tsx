import Map from "ol/Map";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import { fromLonLat } from "ol/proj";
import MVT from "ol/format/MVT";
import View from "ol/View";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Layer } from "@/types";
import { cn } from "@/lib/utils";

const MapComp = () => {
  const [selectedLayer, setSelectedLayer] = useState<Layer>("district");
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const initialMap = new Map({
      target: "map",
      view: new View({
        center: fromLonLat([84.124, 28.3949]),
        zoom: 6.4,
      }),
    });

    setMap(initialMap);
  }, []);

  useEffect(() => {
    if (map) {
      const layer = new VectorTileLayer({
        source: new VectorTileSource({
          format: new MVT(),
          url: `https://vectortile.naxa.com.np/federal/${selectedLayer}.mvt/?tile={z}/{x}/{y}`,
          maxZoom: 14,
        }),
      });

      map.getLayers().clear();

      map.addLayer(layer);
    }
  }, [selectedLayer, map]);

  return (
    <>
      <div id="map" className="map overflow-hidden" />
      <div className="w-[80%] mx-auto flex gap-3 justify-center">
        {["district", "province", "municipality"].map((layer) => (
          <Button
            key={layer}
            variant={"default"}
            onClick={() => setSelectedLayer(layer as Layer)}
            className={cn(
              `bg-yellow-1 hover:bg-yellow-3 transition-colors duration-300 rounded-none w-[150px]`
            )}
          >
            {layer}
          </Button>
        ))}
      </div>
    </>
  );
};

export default MapComp;
