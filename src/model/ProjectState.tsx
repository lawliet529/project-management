import Project from "./Project";

class ProjectState {
  selectedProjectId: number | undefined | null;
  projects: Array<Project> = [];
};

export default ProjectState;
