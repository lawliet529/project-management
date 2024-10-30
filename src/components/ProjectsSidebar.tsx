import { MouseEventHandler } from "react";
import Button from "./Button";
import Project from "../model/Project";

function ProjectsSidebar({
  projects,
  onStartAddProject,
  onSelectProject,
  selectedProject,
}: {
  projects: Array<Project>;
  onStartAddProject: MouseEventHandler<HTMLButtonElement>;
  onSelectProject: (id: number) => void;
  selectedProject?: number | null;
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text=stone-200 hover:bg-stone-800";
          if (project.id === selectedProject) {
            cssClasses += " text-stone-200 bg-stone-800";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
