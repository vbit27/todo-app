import { addProjectListeners } from "./DynamicListener";

function renderProjcts() {
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



export { renderProjcts }