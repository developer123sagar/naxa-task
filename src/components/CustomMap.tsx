import Layers from "@/components/map/layers/Layers";
import OLVectorTileLayer from "@/components/map/layers/OLVectorTileLayer";
import OLMap from "@/components/map/OLMap";
import "ol/ol.css";

// ? https://vectortile.naxa.com.np/federal/${vectorLayer}.mvt/?tile={z}/{x}/{y}

const CustomMap = () => {
  return (
    <OLMap zoom={6} center={[84.124, 28.3949]}>
      <Layers>
        <OLVectorTileLayer url="https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}" />
      </Layers>
    </OLMap>
  );
};

export default CustomMap;
