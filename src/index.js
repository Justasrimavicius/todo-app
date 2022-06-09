import OverallStyle from './OverallStyle.css'
import LeftPanelStyle from './LeftPanelStyle.css'
import TodoStyle from './TodoStyle.css'

import ProjectCreate from './modules/ProjectCreateModule.js';
import DOMUpdate from './modules/DOMUpdateModule.js';
import TodoCreate from './modules/TodoCreateModule.js';
import TodoLoad from './modules/TodoLoadModule.js';
import ProjectDelete from './modules/ProjectDeleteModule.js';
import TodoDelete from './modules/TodoDeleteModule.js';

function ProjectButtonClick(){ // This gets called in DOMUpdate when a project gets clicked on - it loads the todos of that project

    const allTodos=document.querySelectorAll('.todo');
    allTodos.forEach(todoElement=>{
        todoElement.remove();
    });
    currentProject=this.dataset.name;
    TodoLoad(projectArray,currentProject,todosField,TodoDelete);
};

let todosField=document.getElementById('todos');
let projectArray=[];
let currentProject;

document.querySelector('#project-add').addEventListener('click',function(){ // Call the modules if Add Project button is clicked and value(name) of the project is defined
    if(document.querySelector('#project-add-input').value!=''){
        ProjectCreate(projectArray);
        DOMUpdate(projectArray,todosField,ProjectButtonClick);
    }
});

document.getElementById('add-todo').addEventListener('click',function(){
    TodoCreate(currentProject,projectArray,TodoDelete);
});
document.getElementById('project-delete').addEventListener('click',()=>ProjectDelete(currentProject,projectArray));