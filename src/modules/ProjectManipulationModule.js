// Module for creating/updating a new project


export default function ProjectManipulate(projectArray){

// Add project button functionality - create an object with paramaters of the project(also have an array paramater for the TODOS), push it to an array.
// Add project deletion functionality - deletes the project object from the array.
// Somehow give a signal to the DOMUpdateModule to update the DOM

// Project add functionality - updates the project array when gets called in index.js(when the project create button gets clicked)
const addProjectInput=document.getElementById('project-add-input');



function Project(name){
    this.name=name;
    this.creationDate=`${(new Date().getFullYear())} ${(new Date().getMonth())+1} ${(new Date().getDate())}`;
    this.todoList=[];
}


projectArray.push(new Project(`${addProjectInput.value}`));
addProjectInput.value='';

console.log(projectArray);


return projectArray;



};