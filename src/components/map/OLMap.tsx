import React from "react";
import useInitializeMap from "@/hooks/useInitializeMap";

const OLMap = ({
  zoom,
  center,
  children,
}: {
  zoom: number;
  center: number[];
  children: React.ReactNode;
}) => {
  // initialing map
  useInitializeMap({ center, zoom });

  return (
    <div id="map" className="h-[300px] w-[80%] overflow-hidden mx-auto">
      {children}
    </div>
  );
};

export default OLMap;
