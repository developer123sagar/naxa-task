import { useState } from "react";

import useInitializeMap from "@/hooks/useInitializeMap";
import useLayerSwitching from "@/hooks/useLayerSwitching";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Layer } from "@/types";
import 'ol/ol.css';

const MapComp = () => {
  const [selectedLayer, setSelectedLayer] = useState<Layer>("district");

  // initializing map
  const map = useInitializeMap();

  // layer switching
  useLayerSwitching(map, selectedLayer);

  return (
    <>
      <div id="map" className="h-[300px] md:h-[400px] w-[95%] md:w-[80%] mx-auto overflow-hidden" />
      <div className="w-[80%] mx-auto flex gap-3 justify-center">
        {["district", "province", "municipality"].map((layer) => (
          <Button
            key={layer}
            variant={"default"}
            onClick={() => setSelectedLayer(layer as Layer)}
            className={cn(
              `bg-yellow-1 hover:bg-yellow-3 transition-colors duration-300 rounded-none w-[150px] capitalize`
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
