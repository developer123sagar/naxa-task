import Map from "ol/Map";
import React from "react";
import useInitializeMap from "@/hooks/useInitializeMap";

interface OLMapProps {
  zoom: number;
  center: number[];
  children: React.ReactNode;
}

const OLMap = ({ zoom, center, children }: OLMapProps) => {
  // Initialize the map
  const map = useInitializeMap({ center, zoom });

  return (
    <div id="map" className="h-[300px] w-[80%] overflow-hidden mx-auto">
      {/* passing map instance to all the child components */}
      {React.Children.map(children, (child) =>
        React.isValidElement<{ map: Map | null }>(child)
          ? React.cloneElement(child, { map })
          : child
      )}
    </div>
  );
};

export default OLMap;
