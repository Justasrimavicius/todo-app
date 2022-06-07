// Module for updating projects information


export default function UpdateModule(projectArray){

    const projectDiv=document.getElementById('projects');



        projectArray.forEach((element,index) => {
            if(index==0){
                projectDiv.innerHTML='';
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectDiv.append(projectButton);
            }else{
                const projectButton=document.createElement('button');
                projectButton.classList.add('project-left');
                projectButton.innerText=element.name;
                projectDiv.append(projectButton);
            }

        });
        return projectDiv;

};