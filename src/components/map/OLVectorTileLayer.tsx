import Map from "ol/Map";
import MVT from "ol/format/MVT";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import { useEffect } from "react";

const OLVectorTileLayer = ({ url, map }: { url: string; map?: Map }) => {
  useEffect(() => {
    if (map) {
      const layer = new VectorTileLayer({
        source: new VectorTileSource({
          format: new MVT(),
          url: url,
          maxZoom: 14,
        }),
      });
      map.addLayer(layer);

      return () => {
        map.removeLayer(layer);
      };
    }
  }, [map, url]);

  return null;
};

export default OLVectorTileLayer;
