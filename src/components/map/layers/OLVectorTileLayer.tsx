import MVT from "ol/format/MVT";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import { useEffect } from "react";

import useInitializeMap from "@/hooks/useInitializeMap";
import { RootState, useAppSelector } from "@/redux/store";

const OLVectorTileLayer = ({ url }: { url: string }) => {
  const { zoom, center } = useAppSelector((state: RootState) => state.map);
  const map = useInitializeMap({ zoom, center });

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
    }
  }, [map, url]);

  return null;
};

export default OLVectorTileLayer;
