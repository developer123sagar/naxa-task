import Draw from "ol/interaction/Draw";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DrawType = "Point" | "LineString" | "Polygon" | "Circle";

const DrawFeature = ({ map }: { map?: Map }) => {
  const [drawType, setDrawType] = useState<DrawType>("Point");
  const [draw, setDraw] = useState<Draw | null>(null);

  // Handle draw interaction
  useEffect(() => {
    const source = new VectorSource({ wrapX: false });

    const vectorLayer = new VectorLayer({
      source: source,
    });

    if (map) {
      map.addLayer(vectorLayer);
    }

    if (draw && map) {
      map.removeInteraction(draw);
    }

    if (map) {
      const newDraw = new Draw({
        source: source,
        type: drawType,
      });

      map.addInteraction(newDraw);
      setDraw(newDraw);
    }
  }, [map, drawType]);

  return (
    <div className="ml-5">
      <Select onValueChange={(value) => setDrawType(value as DrawType)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Geometry" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Point">Point</SelectItem>
          <SelectItem value="LineString">LineString</SelectItem>
          <SelectItem value="Polygon">Polygon</SelectItem>
          <SelectItem value="Circle">Circle</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DrawFeature;
