// Module for updating the HTML when creating a new project




export default function UpdateModule(projectArray,todosField,projectButtonClick){
    const projectDiv=document.getElementById('projects');



        projectArray.forEach((element,index) => {
            if(index==0){
                projectDiv.innerHTML='';
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectButton.dataset.name=`${element.name}`;

                projectButton.addEventListener('click',projectButtonClick); // this function sits in index.js

                projectDiv.append(projectButton);
            }else{
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectButton.dataset.name=`${element.name}`;

                projectButton.addEventListener('click',projectButtonClick); // this fucntion sits in index.js

                projectDiv.append(projectButton);
            }

        });

        return {projectDiv,todosField};

};