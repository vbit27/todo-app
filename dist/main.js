/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DomFunctionality.js":
/*!*********************************!*\
  !*** ./src/DomFunctionality.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectDom\": () => (/* binding */ newProjectDom),\n/* harmony export */   \"displayHeader\": () => (/* binding */ displayHeader),\n/* harmony export */   \"newTaskDom\": () => (/* binding */ newTaskDom),\n/* harmony export */   \"editTaskDom\": () => (/* binding */ editTaskDom)\n/* harmony export */ });\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n\n\n\nconst newProjectDom = (() => {\n    const addProjectBtn = document.querySelector('#add-project');\n    const submitProjectBtn = document.getElementById('submit-project');\n    const cancelSubmitProjectBtn = document.getElementById('cancel-submit-project')\n    const submitProjectWindow = document.querySelector('.submit-project-window');\n    const _nameField = document.getElementById('project-name');\n    const _descriptionField = document.getElementById('project-description');\n\n    function hide () {\n        clear();\n        submitProjectWindow.style.display = \"none\";\n    }\n\n    function show() {\n        editTaskDom.hide();\n        newTaskDom.hide();\n        submitProjectWindow.style.display = \"block\";\n    }\n\n    function clear() {\n        _nameField.value = '';\n        _descriptionField.value = '';\n    }\n\n    function submitProject () {\n        if (_nameField.value !== '' && _descriptionField.value !== '') {\n\n            const name = _nameField.value;\n            const description = _descriptionField.value;\n\n            (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(name, description);\n            clear();\n            hide();\n        } else alert('Please fill all requierd fields.');\n    }\n\n    return {\n        addProjectBtn,\n        cancelSubmitProjectBtn,\n        submitProjectBtn,\n        show,\n        hide,\n        submitProject\n    }\n})();\n\n\nconst displayHeader = (() => {\n    const headerContainer = document.querySelector('.active-project-container');\n\n    function show() {\n        headerContainer.style.display = \"flex\";\n    }\n\n    function hide() {\n        headerContainer.style.display = \"none\";\n    }\n\n    return {\n        show,\n        hide\n    }\n\n})() \n\n\nconst newTaskDom = (() => {\n    const addTaskBtn = document.querySelector('.add-task')\n    const addTaskWindow = document.getElementById('submit-task-window');\n    const submitTaskBtn = document.getElementById('submit-task');\n    const cancelTaskBtn = document.getElementById('cancel-submit-task')\n    const _nameField = document.getElementById('task-name');\n    const _dueDateField = document.getElementById('task-due-date');\n    const _priorityField = document.getElementById('priority');\n\n    function show() {\n        editTaskDom.hide();\n        newProjectDom.hide();\n        addTaskWindow.style.display = \"block\";\n    }\n\n    function hide() {\n        clear()\n        addTaskWindow.style.display = \"none\";\n    }\n\n    function clear() {\n        _nameField.value = '';\n        _dueDateField.value = '';\n        _priorityField.value = '';\n    }\n\n    function submitTask() {\n        if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {\n            let name = _nameField.value;\n            let dueDate = _dueDateField.value;\n            let priority = _priorityField.value;\n\n            (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(name, dueDate, priority)\n            hide()\n        } else alert('Please fill all required fields')    \n    }\n\n    return {\n        addTaskBtn,\n        addTaskWindow,\n        submitTaskBtn,\n        cancelTaskBtn,\n        submitTask,\n        show,\n        hide\n    }\n\n})();\n\nconst editTaskDom = (() => {\n    const editTaskWindow = document.getElementById('edit-task-window');\n    const updateTaskBtn = document.getElementById('update-task');\n    const cancelUpdateBtn = document.getElementById('cancel-update-task');\n    const _nameField = document.getElementById('edit-task-name');\n    const _dueDateField = document.getElementById('edit-task-due-date');\n    const _priorityField = document.getElementById('edit-priority');\n    let selectedTask; // index of the active task\n\n    function show(index) {\n        newProjectDom.hide();\n        newTaskDom.hide()\n        editTaskWindow.style.display = 'block';\n        selectedTask = index;\n    }\n\n    function hide() {\n        clear()\n        editTaskWindow.style.display = \"none\";\n    }\n\n    function clear() {\n        _nameField.value = '';\n        _dueDateField.value = '';\n        _priorityField.value = '';\n    }\n\n    function updateTask() {\n        if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {\n            let name = _nameField.value;\n            let dueDate = _dueDateField.value;\n            let priority = _priorityField.value;\n\n            (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.editTask)(selectedTask, name, dueDate, priority);\n            hide();\n        } else alert('Please fill all required fields')\n    }\n\n    return {\n        updateTaskBtn,\n        cancelUpdateBtn,\n        show,\n        hide,\n        updateTask\n    }\n\n})()\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/DomFunctionality.js?");

/***/ }),

/***/ "./src/DynamicListener.js":
/*!********************************!*\
  !*** ./src/DynamicListener.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectListeners\": () => (/* binding */ addProjectListeners),\n/* harmony export */   \"addTasksListeners\": () => (/* binding */ addTasksListeners)\n/* harmony export */ });\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n\n\n\nfunction addProjectListeners() {\n    const projectElements = document.querySelectorAll('.single-project-container h3')\n    const deleteProjectBtn = document.querySelectorAll('.delete-project-btn');\n\n    projectElements.forEach((project) => { project.addEventListener('click', function() {\n        let index = this.parentNode.getAttribute('data-index');\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(index);\n    })})\n    \n    deleteProjectBtn.forEach((project) => {project.addEventListener('click', function(){\n        let index = this.parentNode.getAttribute('data-index');\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(index)\n    })})\n}\n\n\nfunction addTasksListeners() {\n    const completeTaskBtn = document.querySelectorAll('.task-title-container');\n    const deleteTaskBtn = document.querySelectorAll('.delete-task');\n    const editTaskBtn = document.querySelectorAll('.edit-task');\n\n    deleteTaskBtn.forEach((project) => { project.addEventListener('click', function() {\n        let index = this.parentNode.getAttribute('data-index');\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(index);\n    })})\n\n    editTaskBtn.forEach((project) => { project.addEventListener('click', function(){\n        let index = this.parentNode.getAttribute('data-index'); // grab the index of the clicked task\n        _DomFunctionality__WEBPACK_IMPORTED_MODULE_1__.editTaskDom.show(index)\n    })})\n\n    completeTaskBtn.forEach((project) => { project.addEventListener('click', function(){\n        let index = this.parentNode.getAttribute('data-index');\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(index)\n    })})\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/DynamicListener.js?");

/***/ }),

/***/ "./src/Logic.js":
/*!**********************!*\
  !*** ./src/Logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"setActiveProject\": () => (/* binding */ setActiveProject),\n/* harmony export */   \"activeProject\": () => (/* binding */ activeProject),\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"updateTaskStatus\": () => (/* binding */ updateTaskStatus),\n/* harmony export */   \"updateUI\": () => (/* binding */ updateUI)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n\n\n\n\n\n\nconst createNewProject = (name, description) => {\n    resetActiveProject()\n    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.push((0,_Project__WEBPACK_IMPORTED_MODULE_1__.newProject)(name, description))\n\n    updateUI();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n    _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.show()\n\n}\n\nconst deleteProject = (index) => {\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].active) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].active = true;\n    }\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.allProjects.length == 1) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(index, 1)\n        updateUI();\n        _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.hide();\n    }\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.allProjects.length > 1) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(index, 1)\n        updateUI();\n    }\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n}\n\nconst resetActiveProject = () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(project => project.active = false)\n}\n\nconst setActiveProject = (index) => {\n    resetActiveProject();\n    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].active = true;\n    updateUI();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n}\n\nconst activeProject = () => {\n    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(project => project.active == true)\n    return activeProject\n} \n\n\n\nconst createNewTask = (name, dueDate, priority) => {\n    activeProject().tasks.push((0,_Task__WEBPACK_IMPORTED_MODULE_2__.newTask)(name, dueDate, priority));\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n}\n\nconst deleteTask = (index) => {\n   activeProject().tasks.splice(index, 1);\n   updateUI()\n   ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\n\nconst editTask = (index, name, dueDate, priority) => {\n    activeProject().tasks[index].name = name;\n    activeProject().tasks[index].dueDate = dueDate;\n    activeProject().tasks[index].priority = priority;\n\n    updateUI();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\nconst updateTaskStatus = (index) => {\n    activeProject().tasks[index].complete ?\n        activeProject().tasks[index].complete = false :\n        activeProject().tasks[index].complete = true;\n\n        updateUI();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n    };\n\nconst updateUI = () => {\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderHeader)();\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();\n    (_index__WEBPACK_IMPORTED_MODULE_0__.allProjects == []) ? _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.hide() : _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.show();\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/Logic.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\nconst newProject = (name, description) => {\n    let tasks = []\n    let active = true;\n    return {\n        name,\n        description,\n        tasks,\n        active\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/Project.js?");

/***/ }),

/***/ "./src/StaticListener.js":
/*!*******************************!*\
  !*** ./src/StaticListener.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n\n\n\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.addProjectBtn.addEventListener('click' , _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.show)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.cancelSubmitProjectBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.hide)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.submitProjectBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.submitProject)\n\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.addTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.show)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.submitTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.submitTask)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.cancelTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.hide)\n\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.updateTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.updateTask)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.cancelUpdateBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.hide)\n\n//# sourceURL=webpack://todo-app/./src/StaticListener.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\nconst newTask = (name, dueDate, priority) => {\n    let complete = false;\n    return {\n        name,\n        dueDate,\n        priority,\n        complete\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"setLocalMemory\": () => (/* binding */ setLocalMemory)\n/* harmony export */ });\n/* harmony import */ var _StaticListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticListener */ \"./src/StaticListener.js\");\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n\n\n\nlet allProjects = []\n\n\n// If there is no local storage, add default projects\n\nif (!localStorage.getItem(\"AllProjects\")) {\n    (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewProject)('Sample Project', 'This is my first project');\n\n   \n    (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('This is a sample task', '2021-04-15', 'High');\n    (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('On the left side you ca add a new project', '2021-04-15', 'High');\n    (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('On the right you see the tasks for that project', '2021-04-15', 'High')\n    ;(0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('By clicking on the task you can mark it as done', '2021-04-15', 'High')\n}\n\n\n\n\n// Local Storage\n\nfunction getFromLocalMemory() {\n    let originalProjects = JSON.parse(localStorage.getItem(\"AllProjects\"))\n    if (originalProjects) {\n        allProjects = originalProjects;\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.updateUI)();\n    }\n}\n\nfunction setLocalMemory(projects) {\n    if (projects !== []) {\n        let myProjectsLocal = JSON.stringify(projects)\n        localStorage.setItem(\"AllProjects\", myProjectsLocal)\n    }\n}\n\ngetFromLocalMemory()\n\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _DynamicListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicListener */ \"./src/DynamicListener.js\");\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n\n\n\n\nfunction renderProjects() {\n    const projectList = document.getElementById('project-list');\n\n    projectList.innerHTML = '';\n\n    ___WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project, index) => {\n    const singleProjectContainer = document.createElement('div');\n    singleProjectContainer.classList.add('single-project-container');\n    singleProjectContainer.setAttribute('data-index', index)\n\n    if (project.active === true) {\n        singleProjectContainer.classList.add('active-project');\n    }\n\n    const projectTitle = document.createElement('h3')\n    projectTitle.innerText = project.name;\n\n    const deleteProjectBtn = document.createElement('button');\n    deleteProjectBtn.innerText = 'X';\n    deleteProjectBtn.classList.add('delete-project-btn')\n\n\n\n    singleProjectContainer.appendChild(projectTitle)\n    singleProjectContainer.appendChild(deleteProjectBtn)\n    projectList.appendChild(singleProjectContainer);\n    })\n\n    ;(0,_DynamicListener__WEBPACK_IMPORTED_MODULE_1__.addProjectListeners)();\n}\n\nfunction renderHeader() {\n    const activeProjectDetails = document.querySelector('.active-project-description')\n\n    activeProjectDetails.innerHTML = \"\";\n\n\n    if((0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)()) {\n        const activeTitle = document.createElement('h3');\n        activeTitle.innerText = (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().name;\n\n        const activeDescription = document.createElement('h5');\n        activeDescription.innerText = (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().description;\n\n        activeProjectDetails.appendChild(activeTitle);\n        activeProjectDetails.appendChild(activeDescription);\n    }\n}\n\nfunction renderTasks() {\n        const taskContainer = document.querySelector('.task-list-container')\n\n        taskContainer.innerHTML = '';\n\n    if((0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)()) {\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().tasks.forEach((task, index) => {\n            const singleTask = document.createElement('div');\n            singleTask.classList.add('single-task-container');\n            singleTask.setAttribute('data-index', index);\n\n            if (task.complete === true) {\n                singleTask.classList.add('completed-task');\n            }\n\n            const titleContainer = document.createElement('div');\n            titleContainer.classList.add('task-title-container');\n\n            const circle = document.createElement('span');\n            circle.classList.add('dot');\n\n            const taskTitle = document.createElement('h5');\n            taskTitle.innerText = task.name;\n\n            const taskPriority = document.createElement('h6');\n            taskPriority.classList.add('task-priority')\n            taskPriority.innerText = task.priority;\n\n            const taskDueDate = document.createElement('h6');\n            taskDueDate.innerText = task.dueDate;\n\n            const editTaskBtn = document.createElement('button');\n            editTaskBtn.innerText = 'Edit';\n            editTaskBtn.classList.add('edit-task');\n\n            const deleteTaskBtn = document.createElement('button')\n            deleteTaskBtn.innerText = 'X';\n            deleteTaskBtn.classList.add('delete-task')\n\n            titleContainer.appendChild(circle)\n            titleContainer.appendChild(taskTitle)\n            titleContainer.appendChild(taskPriority)\n            titleContainer.appendChild(taskDueDate)\n            singleTask.appendChild(titleContainer)\n            singleTask.appendChild(editTaskBtn)\n            singleTask.appendChild(deleteTaskBtn)\n            taskContainer.appendChild(singleTask)\n\n        })\n    }  \n    \n    (0,_DynamicListener__WEBPACK_IMPORTED_MODULE_1__.addTasksListeners)();  \n       \n}\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;