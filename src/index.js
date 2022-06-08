import OverallStyle from './OverallStyle.css'
import LeftPanelStyle from './LeftPanelStyle.css'
import TodoStyle from './TodoStyle.css'

import ProjectManipulate from './modules/ProjectManipulationModule.js';
import DOMUpdate from './modules/DOMUpdateModule.js';
import TodoCreate from './modules/TodoCreateModule.js';
import TodoLoad from './modules/TodoLoadModule.js';

// TESTING FIELD(easier to use console.log() to check if everything works fine)

function ProjectButtonClick(){

    const allTodos=document.querySelectorAll('.todo');
    allTodos.forEach(todoElement=>{
        todoElement.remove();
    });
    currentProject=this.dataset.name; // For TodoLoad and Project tab deletion
    TodoLoad(projectArray,currentProject,todosField);
    console.log(currentProject);
};


// TESTING FIELD



// CODE

let todosField=document.getElementById('todos');
let field='a';
let projectArray=[];
let currentProject;

document.querySelector('#project-add').addEventListener('click',function(){ // Call the modules if Add Project button is clicked and value(name) of the project is defined
    if(document.querySelector('#project-add-input').value!=''){
        ProjectManipulate(projectArray);
        DOMUpdate(projectArray,todosField,ProjectButtonClick);

    }
});

document.getElementById('add-todo').addEventListener('click',function(){
    TodoCreate(currentProject,projectArray);


});