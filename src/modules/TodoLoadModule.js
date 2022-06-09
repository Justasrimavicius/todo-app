// Module for updating todos information

export default function TodoLoad(projectArray,currentProject,todosField,TodoDelete){

// currentProject - name in the projectArray of the project that needs its todos to be loaded
    projectArray.forEach((element,index)=>{
        if(element.name==currentProject){ // Looks for the project that needs todos loaded
            projectArray[index].todoList.forEach((element,todoListIndex) => { // Creates a div,p and a button for each todo index

                let todoDiv=document.createElement('div');
                todoDiv.classList.add('todo');

                let todoText=document.createElement('p');
                todoText.innerText=`${projectArray[index].todoList[todoListIndex]}`;

                let todoBtn=document.createElement('button');
                todoBtn.innerText='Clear';
                todoBtn.setAttribute('id','todo-btn');
                todoBtn.addEventListener('click',()=>TodoDelete(currentProject,projectArray,todoBtn));

                todoDiv.append(todoText,todoBtn);
                todosField.insertBefore(todoDiv,document.getElementById('add-todo-input'));
            });
            return todosField;

        };
    });
}
