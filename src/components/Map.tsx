import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView(
        [27.7305765773454, 85.32843572490575],
        13
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div className="w-full bg-gray-200/60">
      <div
        id="map"
        ref={mapRef}
        style={{
          height: "400px",
          width: "80%",
          margin: "0px auto",
          borderRadius: "16px",
        }}
      ></div>
    </div>
  );
};

export default Map;
