import { addProjectListeners } from "./DynamicListener";
import { activeProject } from './Logic'

function renderProjects() {
    const projectList = document.getElementById('project-list');

    projectList.innerHTML = '';

    allProjects.forEach((project, index) => {
    const singleProjectContainer = document.createElement('div');
    singleProjectContainer.classList.add('single-project-container');
    singleProjectContainer.setAttribute('data-index', index)

    const projectTitle = document.createElement('h3')
    projectTitle.innerText = project.name;

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.innerText = 'X';
    deleteProjectBtn.classList.add('delete-project-btn')

    singleProjectContainer.appendChild(projectTitle)
    singleProjectContainer.appendChild(deleteProjectBtn)
    projectList.appendChild(singleProjectContainer);
    })

    addProjectListeners();
}

function renderHeader() {
    const activeProjectDetails = document.querySelector('.active-project-description')

    activeProjectDetails.innerHTML = "";

    const activeTitle = document.createElement('h3');
    activeTitle.innerText = activeProject().name;

    const activeDescription = document.createElement('h5');
    activeDescription.innerText = activeProject().description;

    activeProjectDetails.appendChild(activeTitle);
    activeProjectDetails.appendChild(activeDescription);



}



export { renderProjects, renderHeader }