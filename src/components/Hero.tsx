import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchCategoryRequest } from "@/redux/actions/projectAction";

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state: RootState) => state.project);

  useEffect(() => {
    dispatch(fetchCategoryRequest());
  }, [dispatch]);

  return (
    <section className="h-screen bg-gray-50">
      <div className="hero-bg w-full h-[40vh] bg-gray-200/60">
        <div className="flex-col-center h-full">
          <h1 className="text-yellow-3 uppercase tracking-tighter">
            portfolio
          </h1>
          <h2 className="text-5xl text-gray-600 font-light">
            Diverse, <span className="text-blue-1">Impactful</span>, and
            Reliable
          </h2>
        </div>
      </div>

      <div className="w-[90%] mx-auto bg-white-1 shadow-xl -mt-12 grid grid-cols-5 gap-5 py-4 px-6 items-center">
        <h2
          className={cn(
            "cursor-pointer text-sm p-2",
            !selectedCategory ? "bg-yellow-1 text-blue-1" : "text-gray-1"
          )}
          onClick={() => setSelectedCategory("")}
        >
          Key Highlights
        </h2>

        {category?.map((item) => (
          <h2
            className={cn(
              "cursor-pointer text-sm p-2",
              selectedCategory === item.title
                ? "text-blue-1 bg-yellow-1"
                : "text-gray-1"
            )}
            onClick={() => setSelectedCategory(item.title)}
          >
            {item.title}
          </h2>
        ))}
      </div>
    </section>
  );
};

export default Hero;
