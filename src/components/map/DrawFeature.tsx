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
import { Button } from "../ui/button";

type DrawType = "Point" | "LineString" | "Polygon" | "Circle";

const DrawFeature = ({ map }: { map?: Map }) => {
  const [drawType, setDrawType] = useState<DrawType>("Point");
  const [draw, setDraw] = useState<Draw | null>(null);

  // Handle draw interaction
  useEffect(() => {
    if (map) {
      const source = new VectorSource({ wrapX: false });

      const vectorLayer = new VectorLayer({
        source: source,
      });

      map.addLayer(vectorLayer);

      draw && map.removeInteraction(draw);

      const newDraw = new Draw({
        source: source,
        type: drawType,
      });

      map.addInteraction(newDraw);
      setDraw(newDraw);
    }
  }, [map, drawType]);

  return (
    <div className="ml-5 flex items-center gap-2">
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
      <Button variant={"outline"} onClick={() => draw?.removeLastPoint()}>Undo</Button>
    </div>
  );
};

export default DrawFeature;
