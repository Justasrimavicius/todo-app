// Module for creating todos inside of a project

export default function TodoCreate(currentProject,projectArray,TodoDelete){
    projectArray.forEach((element,index) => {
        
        if(element.name==currentProject){
            projectArray[index].todoList.push(document.getElementById('add-todo-input').value);
            let todoText=document.createElement('p');
            todoText.innerText=document.getElementById('add-todo-input').value;

            let todoDiv=document.createElement('div');
            todoDiv.classList.add('todo');

            let todoBtn=document.createElement('button');
            todoBtn.innerText='Clear';
            todoBtn.addEventListener('click',()=>TodoDelete(currentProject,projectArray,todoBtn));
            todoBtn.setAttribute('id','todo-btn');
            
            todoDiv.append(todoText,todoBtn);
            document.getElementById('todos').insertBefore(todoDiv,document.getElementById('add-todo-input'));
        }

    });


};