import { allProjects } from './index'
import { newProject } from './Project'


const createNewProject = (name, description) => {
    resetActiveProject()
    allProjects.push(newProject(name, description))

}

const resetActiveProject = () => {
    allProjects.forEach(project => project.active = false)
}


export { createNewProject }