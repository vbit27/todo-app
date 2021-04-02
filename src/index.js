import "./StaticListener"
import { createNewProject, createNewTask, updateUI } from './Logic'

let allProjects = []


if (!localStorage.getItem("AllProjects")) {
    createNewProject('My Second Project', 'This is my first project');
   
    createNewTask('This is a sample task', '2021-04-15', 'High');
    createNewTask('On the left side you ca add a new project', '2021-04-15', 'High');
    createNewTask('On the right you see the tasks for that project', '2021-04-15', 'High')
    createNewTask('By clicking on the task you can mark it as done', '2021-04-15', 'High')
}





// Local Storage

function getFromLocalMemory() {
    let originalProjects = JSON.parse(localStorage.getItem("AllProjects"))
    if (originalProjects) {
        allProjects = originalProjects;
        updateUI();
    }
}

function setLocalMemory(projects) {
    if (projects !== []) {
        let myProjectsLocal = JSON.stringify(projects)
        localStorage.setItem("AllProjects", myProjectsLocal)
    }
}

getFromLocalMemory()




export {allProjects, setLocalMemory}

window.allProjects = allProjects;
