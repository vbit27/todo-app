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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectDom\": () => (/* binding */ newProjectDom),\n/* harmony export */   \"displayHeader\": () => (/* binding */ displayHeader),\n/* harmony export */   \"newTaskDom\": () => (/* binding */ newTaskDom)\n/* harmony export */ });\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\nconst newProjectDom = (() => {\n    const addProjectBtn = document.querySelector('#add-project');\n    const submitProjectBtn = document.getElementById('submit-project');\n    const cancelSubmitProjectBtn = document.getElementById('cancel-submit-project')\n    const submitProjectWindow = document.querySelector('.submit-project-window');\n    const _nameField = document.getElementById('project-name');\n    const _descriptionField = document.getElementById('project-description');\n\n    function hide () {\n        clear();\n        submitProjectWindow.style.display = \"none\";\n    }\n\n    function show() {\n        submitProjectWindow.style.display = \"block\";\n    }\n\n    function clear() {\n        _nameField.value = '';\n        _descriptionField.value = '';\n    }\n\n    function submitProject () {\n        const name = _nameField.value;\n        const description = _descriptionField.value;\n\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(name, description);\n        clear();\n        hide();\n    }\n\n    return {\n        addProjectBtn,\n        cancelSubmitProjectBtn,\n        submitProjectBtn,\n        show,\n        hide,\n        submitProject\n    }\n})();\n\n\nconst displayHeader = (() => {\n    const headerContainer = document.querySelector('.active-project-container');\n\n    function show() {\n        headerContainer.style.display = \"block\";\n    }\n\n    function hide() {\n        headerContainer.style.display = \"none\";\n    }\n\n    return {\n        show,\n        hide\n    }\n\n})() \n\n\nconst newTaskDom = (() => {\n    const addTaskBtn = document.querySelector('.add-task')\n    const addTaskWindow = document.getElementById('submit-task-window');\n    const submitTaskBtn = document.getElementById('submit-task');\n    const cancelTaskBtn = document.getElementById('cancel-submit-task')\n    const _nameField = document.getElementById('task-name');\n    const _dueDateField = document.getElementById('task-due-date');\n    const _priorityField = document.getElementById('priority');\n\n    function show() {\n        addTaskWindow.style.display = \"block\";\n    }\n\n    function hide() {\n        clear()\n        addTaskWindow.style.display = \"none\";\n    }\n\n    function clear() {\n        _nameField.value = '';\n        _dueDateField.value = '';\n        _priorityField.value = '';\n    }\n\n    function submitTask() {\n        let name = _nameField.value;\n        let dueDate = _dueDateField.value;\n        let priority = _priorityField.value;\n\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(name, dueDate, priority)\n        hide()\n    }\n\n    return {\n        addTaskBtn,\n        addTaskWindow,\n        submitTaskBtn,\n        cancelTaskBtn,\n        submitTask,\n        show,\n        hide\n    }\n\n})();\n\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/DomFunctionality.js?");

/***/ }),

/***/ "./src/DynamicListener.js":
/*!********************************!*\
  !*** ./src/DynamicListener.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectListeners\": () => (/* binding */ addProjectListeners)\n/* harmony export */ });\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n\n\nfunction addProjectListeners() {\n    const projectElements = document.querySelectorAll('.single-project-container h3')\n    const deleteProjectBtn = document.querySelectorAll('.delete-project-btn');\n\n\n    projectElements.forEach((project) => { project.addEventListener('click', function() {\n        let index = this.parentNode.getAttribute('data-index');\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(index);\n    })})\n    \n    deleteProjectBtn.forEach((project) => {project.addEventListener('click', function(){\n        let index = this.parentNode.getAttribute('data-index');\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(index)\n    })})\n}\n\n\nfunction addTasksListeners() {\n\n    const taskTitleElements = document.querySelectorAll('.task-title-container');\n    const deleteTaskBtn = document.querySelectorAll('.delete-task');\n    const editTaskBtn = document.querySelectorAll('.edit-task');\n    const editTaskWindow = document.getElementById('edit-task-window');\n\n\n\n    function removeTask() {\n        const index = Array.from(deleteTaskBtn).indexOf(this)\n\n        this.parentNode.remove()\n        allProjects[activeProject].deleteTask(index)\n        renderTasks(activeProject)\n    }\n    \n    function updateTaskStatus() {\n        const index = Array.from(taskTitleElements).indexOf(this)\n        allProjects[activeProject].tasks[index].setStatus()\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/DynamicListener.js?");

/***/ }),

/***/ "./src/Logic.js":
/*!**********************!*\
  !*** ./src/Logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"setActiveProject\": () => (/* binding */ setActiveProject),\n/* harmony export */   \"activeProject\": () => (/* binding */ activeProject),\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n\n\n\n\n\n\nconst createNewProject = (name, description) => {\n    resetActiveProject()\n    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.push((0,_Project__WEBPACK_IMPORTED_MODULE_1__.newProject)(name, description))\n\n    updateUI();\n    _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.show()\n}\n\nconst deleteProject = (index) => {\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].active) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].active = true;\n    }\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.allProjects.length == 1) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(index, 1)\n        updateUI();\n        _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.hide();\n    }\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.allProjects.length > 1) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(index, 1)\n        updateUI();\n    }\n\n}\n\nconst resetActiveProject = () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(project => project.active = false)\n}\n\nconst setActiveProject = (index) => {\n    resetActiveProject();\n    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].active = true;\n    updateUI();\n}\n\nconst activeProject = () => {\n    let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(project => project.active == true)\n    return activeProject\n} \n\n\nconst createNewTask = (name, dueDate, priority) => {\n    activeProject().tasks.push((0,_Task__WEBPACK_IMPORTED_MODULE_2__.newTask)(name, dueDate, priority));\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();\n}\n\nconst updateUI = () => {\n    ;(0,_render__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderHeader)();\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/Logic.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n\n\n\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.addProjectBtn.addEventListener('click' , _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.show)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.cancelSubmitProjectBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.hide)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.submitProjectBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.submitProject)\n\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.addTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.show)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.submitTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.submitTask)\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.cancelTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.hide)\n\n//# sourceURL=webpack://todo-app/./src/StaticListener.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\nconst newTask = (name, dueDate, priority) => {\n    let complete = true;\n    return {\n        name,\n        dueDate,\n        priority,\n        complete\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects)\n/* harmony export */ });\n/* harmony import */ var _StaticListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticListener */ \"./src/StaticListener.js\");\n\n\nlet allProjects = [];\n\n\n\n\nwindow.allProjects = allProjects;\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _DynamicListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicListener */ \"./src/DynamicListener.js\");\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n\n\n\n\nfunction renderProjects() {\n    const projectList = document.getElementById('project-list');\n\n    projectList.innerHTML = '';\n\n    ___WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project, index) => {\n    const singleProjectContainer = document.createElement('div');\n    singleProjectContainer.classList.add('single-project-container');\n    singleProjectContainer.setAttribute('data-index', index)\n\n    const projectTitle = document.createElement('h3')\n    projectTitle.innerText = project.name;\n\n    const deleteProjectBtn = document.createElement('button');\n    deleteProjectBtn.innerText = 'X';\n    deleteProjectBtn.classList.add('delete-project-btn')\n\n    singleProjectContainer.appendChild(projectTitle)\n    singleProjectContainer.appendChild(deleteProjectBtn)\n    projectList.appendChild(singleProjectContainer);\n    })\n\n    ;(0,_DynamicListener__WEBPACK_IMPORTED_MODULE_1__.addProjectListeners)();\n}\n\nfunction renderHeader() {\n    const activeProjectDetails = document.querySelector('.active-project-description')\n\n    activeProjectDetails.innerHTML = \"\";\n\n\n    if((0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)()) {\n        const activeTitle = document.createElement('h3');\n        activeTitle.innerText = (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().name;\n\n        const activeDescription = document.createElement('h5');\n        activeDescription.innerText = (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().description;\n\n        activeProjectDetails.appendChild(activeTitle);\n        activeProjectDetails.appendChild(activeDescription);\n    }\n}\n\nfunction renderTasks() {\n        const taskContainer = document.querySelector('.task-list-container')\n\n        taskContainer.innerHTML = '';\n\n    if((0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)()) {\n        (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().tasks.forEach((task, index) => {\n            const singleTask = document.createElement('div');\n            singleTask.classList.add('single-task-container');\n            singleTask.setAttribute('data-index', index);\n\n            const titleContainer = document.createElement('div');\n            titleContainer.classList.add('task-title-container');\n\n            const circle = document.createElement('span');\n            circle.classList.add('dot');\n\n            const taskTitle = document.createElement('h5');\n            taskTitle.innerText = task.name;\n\n            const taskPriority = document.createElement('h6');\n            taskPriority.classList.add('task-priority')\n            taskPriority.innerText = task.priority;\n\n            const taskDueDate = document.createElement('h6');\n            taskDueDate.innerText = task.dueDate;\n\n            const editTaskBtn = document.createElement('button');\n            editTaskBtn.innerText = 'Edit';\n            editTaskBtn.classList.add('edit-task');\n\n            const deleteTaskBtn = document.createElement('button')\n            deleteTaskBtn.innerText = 'X';\n            deleteTaskBtn.classList.add('delete-task')\n\n            titleContainer.appendChild(circle)\n            titleContainer.appendChild(taskTitle)\n            titleContainer.appendChild(taskPriority)\n            titleContainer.appendChild(taskDueDate)\n            singleTask.appendChild(titleContainer)\n            singleTask.appendChild(editTaskBtn)\n            singleTask.appendChild(deleteTaskBtn)\n            taskContainer.appendChild(singleTask)\n\n        })\n    }    \n    \n    \n}\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/render.js?");

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