import Map from "ol/Map";
import MVT from "ol/format/MVT";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import { useEffect } from "react";

const useLayerSwitching = (map: Map | null, selectedLayer: string) => {
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
  }, [map, selectedLayer]);
};

export default useLayerSwitching;
