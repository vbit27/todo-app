import { allProjects } from './index'
import { newProject } from './Project'
import { renderProjcts } from './render'


const createNewProject = (name, description) => {
    resetActiveProject()
    allProjects.push(newProject(name, description))

}


const deleteProject = (index) => {

    if (allProjects[index].active) {
        allProjects[0].active = true;
    }

    allProjects.splice(index, 1)
    renderProjcts()
}

const resetActiveProject = () => {
    allProjects.forEach(project => project.active = false)
}




export { createNewProject, deleteProject }