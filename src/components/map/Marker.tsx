import Feature from "ol/Feature";
import Map from "ol/Map";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { useEffect, useState } from "react";

// defining marker style
const markerStyle = new Style({
  image: new Icon({
    src: "https://png.pngtree.com/png-vector/20210214/ourmid/pngtree-location-marker-png-image_2921053.jpg",
    anchor: [0.5, 1],
    scale: 0.06,
  }),
});

const Marker = ({ map }: { map: Map }) => {
  const [markerLayer, setMarkerLayer] = useState<VectorLayer | null>(null);

  useEffect(() => {
    if (map) {
      const vectorSource = new VectorSource();

      const layer = new VectorLayer({
        source: vectorSource,
      });

      setMarkerLayer(layer);
      map.addLayer(layer);

      const handleMapClick = (event: any) => {
        const coordinates = map.getCoordinateFromPixel(event.pixel);

        // clear previous marker
        vectorSource.clear();

        const marker = new Feature({
          geometry: new Point(coordinates),
        });

        marker.setStyle(markerStyle);
        vectorSource.addFeature(marker);
      };

      map.on("click", handleMapClick);

      return () => {
        map.un("click", handleMapClick);
        if (markerLayer) {
          map.removeLayer(markerLayer);
        }
      };
    }
  }, [map]);

  return null;
};

export default Marker;
