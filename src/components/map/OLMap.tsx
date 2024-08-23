import Map from "ol/Map";
import React from "react";
import useInitializeMap from "@/hooks/useInitializeMap";

const OLMap = ({
  zoom,
  center,
  children,
}: {
  zoom: number;
  center: number[];
  children: (map: Map) => React.ReactNode;
}) => {
  // initialing map
  const map = useInitializeMap({ center, zoom });

  return (
    <div id="map" className="h-[300px] w-[80%] overflow-hidden mx-auto">
      {map ? children(map) : null}
    </div>
  );
};

export default OLMap;
