export default function ProjectDelete(currentProject,projectArray){
    console.log('projectDelete')
    projectArray.forEach((element,index) => {
        console.log('found it');
        if(element.name==currentProject){
            document.querySelector(`[data-name='${element.name}']`).remove();
            projectArray.splice(index,1);
            document.querySelectorAll('.todo').forEach(element=>{
                element.remove();
            })

            return projectArray;
        }
    });


};