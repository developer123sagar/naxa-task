import { cn } from "@/lib/utils";
import { ProjectCardProps } from "@/types";

const ProjectCard = ({
  title,
  subtitle,
  client,
  startDate,
  endDate,
  img,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "bg-blue-1 flex flex-col justify-between shadow hover:shadow-2xl hover:-translate-y-5 transition-all duration-500 cursor-pointer",
        className
      )}
    >
      <div className="py-6 px-8 text-white-1">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-xs py-4">{subtitle}</p>
        <ul className="flex justify-between">
          <li>
            <span className="text-yellow-3 text-xs">Client</span>
            <p className="text-[10px]">{client}</p>
          </li>
          <li>
            <span className="text-yellow-3 text-xs">Duration</span>
            <div>
              <p className="text-[10px]">{`${startDate} - ${endDate}`}</p>
            </div>
          </li>
        </ul>
      </div>
      <img src={img} alt={`${title}`} className="w-full object-cover" />
    </div>
  );
};

export default ProjectCard;
