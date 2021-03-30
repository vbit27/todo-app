import { newProjectDom, newTaskDom } from './DomFunctionality'


newProjectDom.addProjectBtn.addEventListener('click' , newProjectDom.show)
newProjectDom.cancelSubmitProjectBtn.addEventListener('click', newProjectDom.hide)
newProjectDom.submitProjectBtn.addEventListener('click', newProjectDom.submitProject)

newTaskDom.addTaskBtn.addEventListener('click', newTaskDom.show)
newTaskDom.submitTaskBtn.addEventListener('click', newTaskDom.submitTask)
newTaskDom.cancelTaskBtn.addEventListener('click', newTaskDom.hide)