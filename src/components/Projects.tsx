import { useEffect } from "react";

import ProjectCard from "@/components/ProjectCard";
import { bgColors } from "@/constants";
import { fetchProjectsRequest } from "@/redux/actions/projectAction";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";

const Projects = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state: RootState) => state.project);

  useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, [dispatch]);

  return (
    <section className="mt-40 bg-gray-50">
      <div className="w-[90%] mx-auto grid grid-cols-2 flex-wrap gap-y-32">
        {projects?.map((item, id) => (
          <ProjectCard
            key={item.id}
            className="w-[75%]"
            client={item.clients}
            startDate={item.start_date}
            endDate={item.end_date}
            img={item.photo}
            subtitle={item.subtitle}
            title={item.title}
            bgColor={bgColors[id % bgColors.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
