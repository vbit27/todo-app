import { allProjects } from './index'
import { newProject } from './Project'
import { newTask } from './Task'
import { renderProjects, renderHeader, renderTasks } from './render'
import { displayHeader } from './DomFunctionality'

const createNewProject = (name, description) => {
    resetActiveProject()
    allProjects.push(newProject(name, description))

    updateUI();
    displayHeader.show()
}

const deleteProject = (index) => {
    if (allProjects[index].active) {
        allProjects[0].active = true;
    }

    if (allProjects.length == 1) {
        allProjects.splice(index, 1)
        updateUI();
        displayHeader.hide();
    }

    if (allProjects.length > 1) {
        allProjects.splice(index, 1)
        updateUI();
    }
}

const resetActiveProject = () => {
    allProjects.forEach(project => project.active = false)
}

const setActiveProject = (index) => {
    resetActiveProject();
    allProjects[index].active = true;
    updateUI();
}

const activeProject = () => {
    let activeProject = allProjects.find(project => project.active == true)
    return activeProject
} 


const createNewTask = (name, dueDate, priority) => {
    activeProject().tasks.push(newTask(name, dueDate, priority));
    renderTasks();
}

const deleteTask = (index) => {
   activeProject().tasks.splice(index, 1);
   updateUI()
};


const editTask = (index, name, dueDate, priority) => {
    activeProject().tasks[index].name = name;
    activeProject().tasks[index].dueDate = dueDate;
    activeProject().tasks[index].priority = priority;

    updateUI();
};

const updateTaskStatus = (index) => {
    activeProject().tasks[index].complete ?
        activeProject().tasks[index].complete = false :
        activeProject().tasks[index].complete = true;

        updateUI();
    };

const updateUI = () => {
    renderProjects();
    renderHeader();
    renderTasks();
}

export { createNewProject, deleteProject, setActiveProject, 
        activeProject, createNewTask, deleteTask, editTask, updateTaskStatus }