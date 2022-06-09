export default function TodoDelete(currentProject,projectArray,todoBtn){
    console.log('todoDelete')
    projectArray.forEach((element,index) => {
            if(element.name==currentProject){
                element.todoList.forEach((todoElement,todoIndex)=>{
                    if(todoBtn.parentElement.firstChild.innerText==todoElement){
                        element.todoList.splice(todoIndex,1);
                        todoBtn.parentElement.remove();
                        console.log(projectArray);
                        console.log(element.todoList);
                    };
                });

            }
        });


}