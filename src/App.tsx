import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectState from "./model/ProjectState";
import Project from "./model/Project";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState(new ProjectState());

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddPorject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(id: number) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddPorject(projectData: Project) {
    setProjectState((prevState: ProjectState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeletePorject() {
    setProjectState((prevState) => {
      return {
        selectedProjectId: undefined,
        projects: projectState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  let content = (
    <SelectedProject
      project={projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId
      )}
      onDelete={handleDeletePorject}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddPorject} onCancel={handleCancelAddPorject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen flex gap-8">
        <ProjectsSidebar
          projects={projectState.projects}
          onStartAddProject={handleStartAddProject}
          onSelectProject={handleSelectProject}
          selectedProject={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
