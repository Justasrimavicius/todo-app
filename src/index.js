import OverallStyle from './OverallStyle.css'
import LeftPanelStyle from './LeftPanelStyle.css'
import TodoStyle from './TodoStyle.css'

import ProjectManipulate from './modules/ProjectManipulationModule.js';
import DOMUpdate from './modules/DOMUpdateModule.js';
import TodoCreate from './modules/TodoCreateModule.js';
import TodoUpdate from './modules/TodoUpdateModule.js';

// TESTING FIELD(easier to use console.log() to check if everything works fine)


// TESTING FIELD


// CODE


let projectArray=[];

document.querySelector('#project-add').addEventListener('click',function(){
    if(document.querySelector('#project-add-input').value!=''){
        ProjectManipulate(projectArray);
        DOMUpdate(projectArray);
    }

});

// main file that will connect all of the modules functionality