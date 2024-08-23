import OLVectorTileLayer from "@/components/map/OLVectorTileLayer";
import OLMap from "@/components/map/OLMap";
import "ol/ol.css";
import Marker from "./map/Marker";

// ? https://vectortile.naxa.com.np/federal/${vectorLayer}.mvt/?tile={z}/{x}/{y}

const CustomMap = () => {
  return (
    <OLMap zoom={6} center={[84.124, 28.3949]}>
      {(map) => (
        <>
          <OLVectorTileLayer
            map={map}
            url="https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}"
          />
          <Marker map={map} />
        </>
      )}
    </OLMap>
  );
};

export default CustomMap;
