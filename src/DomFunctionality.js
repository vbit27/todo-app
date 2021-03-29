import { createNewProject } from './Logic'
import { renderProjects, renderHeader } from './render'


const newProjectDom = (() => {
    const addProjectBtn = document.querySelector('#add-project');
    const submitProjectBtn = document.getElementById('submit-project');
    const cancelSubmitProjectBtn = document.getElementById('cancel-submit-project')
    const submitProjectWindow = document.querySelector('.submit-project-window');
    const _nameField = document.getElementById('project-name');
    const _descriptionField = document.getElementById('project-description');

    function hide () {
        clear();
        submitProjectWindow.style.display = "none";
    }

    function show() {
        submitProjectWindow.style.display = "block";
    }

    function clear() {
        _nameField.value = '';
        _descriptionField.value = '';
    }

    function submitProject () {
        const name = _nameField.value;
        const description = _descriptionField.value;

        createNewProject(name, description);
        clear();
        hide();
    }

    return {
        addProjectBtn,
        cancelSubmitProjectBtn,
        submitProjectBtn,
        show,
        hide,
        submitProject
    }
})();


const displayHeader = (() => {
    const headerContainer = document.querySelector('.active-project-container');

    function show() {
        headerContainer.style.display = "block";
    }

    function hide() {
        headerContainer.style.display = "none";
    }

    return {
        show,
        hide
    }

})() 

const newTaskDom = (() => {
    const addTaskBtn = document.querySelector('')


})();


export {newProjectDom, displayHeader};

