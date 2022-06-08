// Module for creating a new project


export default function ProjectCreate(projectArray){

// Project add functionality - updates the project array when gets called in index.js(when the project create button gets clicked)
const addProjectInput=document.getElementById('project-add-input');


function Project(name){
    this.name=name;
    this.creationDate=`${(new Date().getFullYear())} ${(new Date().getMonth())+1} ${(new Date().getDate())}`;
    this.todoList=[];
}

projectArray.push(new Project(`${addProjectInput.value}`));
addProjectInput.value='';

return projectArray;



};