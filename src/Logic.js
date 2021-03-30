import { allProjects } from './index'
import { newProject } from './Project'
import { newTask } from './Task'
import { renderProjects, renderHeader, renderTasks } from './render'
import { displayHeader } from './DomFunctionality'

const createNewProject = (name, description) => {
    resetActiveProject()
    allProjects.push(newProject(name, description))

    renderProjects();
    renderTasks;
    displayHeader.show()
    renderHeader();
}

const deleteProject = (index) => {
    if (allProjects[index].active) {
        allProjects[0].active = true;
    }

    if (allProjects.length == 1) {
        allProjects.splice(index, 1)
        renderProjects();
        displayHeader.hide();
    }

    if (allProjects.length > 1) {
        allProjects.splice(index, 1)
        renderProjects();
        renderHeader();
    }

}

const resetActiveProject = () => {
    allProjects.forEach(project => project.active = false)
}

const setActiveProject = (index) => {
    resetActiveProject();
    allProjects[index].active = true;
    renderHeader();
}

const activeProject = () => {
    let activeProject = allProjects.find(project => project.active == true)
    return activeProject
} 


const createNewTask = (name, dueDate, priority) => {
    activeProject().tasks.push(newTask(name, dueDate, priority));
    renderTasks();
}

export { createNewProject, deleteProject, setActiveProject, activeProject, createNewTask }