import OverallStyle from './OverallStyle.css'
import LeftPanelStyle from './LeftPanelStyle.css'
import TodoStyle from './TodoStyle.css'

import ProjectManipulate from './modules/ProjectManipulationModule.js';
import DOMUpdate from './modules/DOMUpdateModule.js';
import TodoCreate from './modules/TodoCreateModule.js';
import TodoLoad from './modules/TodoLoadModule.js';

// TESTING FIELD(easier to use console.log() to check if everything works fine)




// TESTING FIELD


// CODE


let projectArray=[];
let currentProject;

document.querySelector('#project-add').addEventListener('click',function(){ // Call the modules if Add Project button is clicked and value(name) of the project is defined
    if(document.querySelector('#project-add-input').value!=''){
        ProjectManipulate(projectArray);
        DOMUpdate(projectArray,currentProject,TodoLoad);
    }
});

document.querySelector('#add-todo').addEventListener('click',function(){ // Call the modules if a project is clicked on the left side(load up the todos of that project)
    TodoCreate();


});