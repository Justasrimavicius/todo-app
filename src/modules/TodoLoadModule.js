// Module for updating todos information

export default function TodoLoad(projectArray,currentProject,todosField){

// currentProject - name in the projectArray of the project that needs its todos to be loaded
    projectArray.forEach((element,index)=>{
        if(element.name==currentProject){
            if(projectArray[index].todoList.length>1){ // Checks if there are more than 1 todos(forEach doesn't work otherwise)
                projectArray[index].todoList.forEach((element,todoListIndex) => {

                    let todoDiv=document.createElement('div');
                    todoDiv.classList.add('todo');

                    let todoText=document.createElement('p');
                    todoText.innerText=`${projectArray[index].todoList[todoListIndex]}`;

                    let todoBtn=document.createElement('button');
                    todoBtn.innerText='Clear';
                    todoBtn.setAttribute('id','todo-btn');

                    todoDiv.append(todoText,todoBtn);
                    todosField.insertBefore(todoDiv,document.getElementById('add-todo-input'));
                });
            }else if(projectArray[index].todoList.length==1){
                let todoDiv=document.createElement('div');
                todoDiv.classList.add('todo');

                let todoText=document.createElement('p');
                todoText.innerText=`${projectArray[index].todoList[0]}`;

                let todoBtn=document.createElement('button');
                todoBtn.innerText='Clear';
                todoBtn.setAttribute('id','todo-btn');

                todoDiv.append(todoText,todoBtn);
                console.log(todoDiv);
                todosField.insertBefore(todoDiv,document.getElementById('add-todo-input'));
            }
            else{
                return todosField;
            }
            return todosField;

        };
    });
}
