import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleCancel() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            }
        })
    }

    function handleSelectProject(id) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleDeleteProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (projects) => projects.id !== prevState.selectedProjectId
                ),
            }
        })
    }

    const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

    let content = <SelectedProject project={selectedProject} onDelete = {handleDeleteProject} />;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddProject={handleAddProject} onCancel={handleCancel}/>;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject = {handleStartAddProject} />;
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <SideBar
                onSelectProject={handleSelectProject}
                onStartAddProject = {handleStartAddProject}
                projects={projectsState.projects} />
            {content}
        </main>
    );
    }

export default App;
