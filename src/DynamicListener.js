import { deleteProject, setActiveProject, deleteTask } from './Logic'
import { editTaskDom } from './DomFunctionality'

function addProjectListeners() {
    const projectElements = document.querySelectorAll('.single-project-container h3')
    const deleteProjectBtn = document.querySelectorAll('.delete-project-btn');


    projectElements.forEach((project) => { project.addEventListener('click', function() {
        let index = this.parentNode.getAttribute('data-index');
        setActiveProject(index);
    })})
    
    deleteProjectBtn.forEach((project) => {project.addEventListener('click', function(){
        let index = this.parentNode.getAttribute('data-index');
        deleteProject(index)
    })})
}


function addTasksListeners() {

    const taskTitleElements = document.querySelectorAll('.task-title-container');
    const deleteTaskBtn = document.querySelectorAll('.delete-task');
    const editTaskBtn = document.querySelectorAll('.edit-task');
    const editTaskWindow = document.getElementById('edit-task-window');

    deleteTaskBtn.forEach((project) => { project.addEventListener('click', function() {
        let index = this.parentNode.getAttribute('data-index');
        deleteTask(index);
    })})

    
    editTaskBtn.forEach((project) => { project.addEventListener('click', function(){
        let index = this.parentNode.getAttribute('data-index');
        editTaskDom.show(index)
    })})
  /*  function removeTask() {
        const index = Array.from(deleteTaskBtn).indexOf(this)

        this.parentNode.remove()
        allProjects[activeProject].deleteTask(index)
        renderTasks(activeProject)
    }
    
    function updateTaskStatus() {
        const index = Array.from(taskTitleElements).indexOf(this)
        allProjects[activeProject].tasks[index].setStatus()
    }*/
}

export { addProjectListeners, addTasksListeners }