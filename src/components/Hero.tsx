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
    <section>
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

      <div className="w-[90%] mx-auto bg-white-1 shadow-xl -mt-12 grid grid-cols-5 gap-2 py-2 px-4 items-center">
        <h2
          className={cn(
            "cursor-pointer text-sm p-2 hover:bg-yellow-1 hover:text-blue-1 transition-colors duration-1000",
            !selectedCategory ? "bg-yellow-1 text-blue-1" : "text-gray-1"
          )}
          onClick={() => setSelectedCategory("")}
        >
          Key Highlights
        </h2>

        {category?.map((item) => (
          <h2
            key={item.id}
            className={cn(
              "cursor-pointer text-sm p-2 hover:bg-yellow-1 hover:text-blue-1 transition-colors duration-1000",
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
