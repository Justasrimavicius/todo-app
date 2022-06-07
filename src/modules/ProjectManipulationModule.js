// Module for creating/updating a new project


export default function ProjectManipulate(){

// Add project button functionality - create an object with paramaters of the project(also have an array paramater for the TODOS), push it to an array.
// Add project deletion functionality - deletes the project object from the array.
// Somehow give a signal to the DOMUpdateModule to update the DOM


const addProjectBtn=document.getElementById('project-add');
const addProjectInput=document.getElementById('project-add-input');


let projectArray=[];
function ProjectConsctructor(name){
    this.name=name;
    this.creationDate=`${(new Date().getFullYear())} ${(new Date().getMonth())+1} ${(new Date().getDate())}`;
    this.todoList=[];
}

addProjectBtn.addEventListener('click',function(){
if(addProjectInput.value!=''){
    projectArray.push(new ProjectConsctructor(`${addProjectInput.value}`));
    addProjectInput.value='';
    console.log(projectArray);
    return projectArray;

}
});

};