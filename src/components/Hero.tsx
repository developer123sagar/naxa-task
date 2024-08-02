import { useEffect } from "react";

import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchProjectsRequest } from "@/redux/actions/projectAction";

const Hero = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state: RootState) => state.project);

  console.log(projects?.length);

  useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, []);

  return (
    <section className="hero-bg w-full h-[40vh] bg-gray-100">
      <div className="flex-col-center h-full">
        <h1 className="text-yellow-3 uppercase tracking-tighter">portfolio</h1>
        <h2 className="text-5xl text-gray-600 font-light">
          Diverse, <span className="text-blue-1">Impactful</span>, and Reliable
        </h2>
      </div>
    </section>
  );
};

export default Hero;
