import { deleteProject, setActiveProject } from './Logic'

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

export { addProjectListeners }