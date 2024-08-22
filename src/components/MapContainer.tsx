import useInitializeMap from "@/hooks/useInitializeMap";
import useAddMarker from "@/hooks/useAddMarker";
import useVectorTileLayer from "@/hooks/useVectorTileLayer";
import "ol/ol.css";

const MapContainer = () => {
  // initializing map
  const map = useInitializeMap();

  // creating vectortile layer
  useVectorTileLayer(map, "district");

  // Add a marker to the map
  useAddMarker(map);

  return (
    <div
      id="map"
      className="h-[300px] md:h-[400px] w-[95%] md:w-[80%] mx-auto overflow-hidden"
    />
  );
};

export default MapContainer;
