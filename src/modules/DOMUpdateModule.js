// Module for updating projects information




export default function UpdateModule(projectArray,currentProject,TodoLoad){

// Updates the HTML file when it gets called in index.js

    const projectDiv=document.getElementById('projects');
    let todosField;


        projectArray.forEach((element,index) => {
            if(index==0){
                projectDiv.innerHTML='';
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectButton.dataset.index=`${index}`;

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
                    currentProject=projectButton.dataset.index; // For TodoLoad and Project tab deletion
                    todosField=TodoLoad(projectArray,currentProject);
                });

                projectDiv.append(projectButton);
            }else{
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectButton.dataset.index=`${index}`;

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
                    currentProject=projectButton.dataset.index; // For TodoLoad and Project tab deletion
                    todosField=TodoLoad(projectArray,currentProject);
                });

                projectDiv.append(projectButton);
            }

        });


        return projectDiv,todosField;

};