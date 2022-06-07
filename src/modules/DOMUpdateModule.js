// Module for updating projects information


export default function UpdateModule(projectArray){

// Updates the HTML file(left side project buttons) when it gets called in index.js

    const projectDiv=document.getElementById('projects');

    function loadTodos(projectButton){
        const allTodos=document.querySelectorAll('.todo');
        allTodos.forEach(todoElement=>{
            todoElement.remove();
        });
        projectArray.forEach(arrayElement=>{
            if(arrayElement.name==projectButton.innerHTML){
                console.log('found it');
            }
        });
    };


        projectArray.forEach((element,index) => {
            if(index==0){
                projectDiv.innerHTML='';
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectButton.addEventListener('click',function(){
                    const allTodos=document.querySelectorAll('.todo');
                    allTodos.forEach(todoElement=>{
                        todoElement.remove();
                    });
                    projectArray.forEach(arrayElement=>{
                        if(arrayElement.name==projectButton.innerHTML){
                            console.log('found it');
                        }
                    });
                });
                projectDiv.append(projectButton);
            }else{
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectButton.addEventListener('click',function(){
                    const allTodos=document.querySelectorAll('.todo');
                    allTodos.forEach(todoElement=>{
                        todoElement.remove();
                    });
                    projectArray.forEach(arrayElement=>{
                        if(arrayElement.name==projectButton.innerHTML){
                            console.log('found it');
                        }
                    });
                });
                projectDiv.append(projectButton);
            }

        });
        return projectDiv;

};