import Map from "ol/Map";
import Overlay from "ol/Overlay";
import { toLonLat } from "ol/proj";
import { toStringHDMS } from "ol/coordinate";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const Popup = ({ map }: { map?: Map }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closerRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const [hdms, setHdms] = useState("");

  useEffect(() => {
    if (!map) return;

    // create an overlay to anchor the popup to the map
    const overlay = new Overlay({
      element: containerRef.current!,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    overlayRef.current = overlay;
    map.addOverlay(overlay);

    const closer = closerRef.current!;
    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

    // click handler to the map to render the popup.
    const handleMapClick = (evt: any) => {
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));
      setHdms(hdms);

      overlay.setPosition(coordinate);
    };

    map.on("singleclick", handleMapClick);

    return () => {
      map.un("singleclick", handleMapClick);
      map.removeOverlay(overlay);
    };
  }, [map]);

  return (
    <div
      id="popup"
      ref={containerRef}
      className="border p-2 rounded shadow-sm z-30 bg-white-1 bg-opacity-80"
    >
      <div className="flex-between mb-2">
        <p className="text-sm font-medium text-gray-2">You clicked here:</p>

        <span
          ref={closerRef}
          id="popup-closer"
          className="float-right cursor-pointer"
        >
          <X size={18} className="text-gray-2 cursor-pointer" />
        </span>
      </div>
      <span className="text-sm">{hdms}</span>
    </div>
  );
};

export default Popup;
