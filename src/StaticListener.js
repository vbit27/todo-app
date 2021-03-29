import { newProjectDom } from './DomFunctionality'

console.log(newProjectDom.projectList)

newProjectDom.addProjectBtn.addEventListener('click' , newProjectDom.show)
newProjectDom.cancelSubmitProjectBtn.addEventListener('click', newProjectDom.hide)
newProjectDom.submitProjectBtn.addEventListener('click', newProjectDom.submitProject)