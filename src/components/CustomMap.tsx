import OLVectorTileLayer from "@/components/map/OLVectorTileLayer";
import OLMap from "@/components/map/OLMap";
import DrawFeature from "./map/DrawFeature";
// import Popup from "./map/Popup";
// import Marker from "./map/Marker";
import "ol/ol.css";

// ? https://vectortile.naxa.com.np/federal/${vectorLayer}.mvt/?tile={z}/{x}/{y}

const CustomMap = () => {
  return (
    <OLMap zoom={6} center={[84.124, 28.3949]}>
      <OLVectorTileLayer
        url="https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}"
      />
      {/* <Marker /> */}
      {/* <Popup /> */}
      <DrawFeature />
    </OLMap>
  );
};

export default CustomMap;
