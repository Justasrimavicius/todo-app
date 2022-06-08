// Module for creating todos inside of a project

export default function TodoCreate(currentProject,projectArray){
    console.log(`${currentProject} !!!!`);
    console.log(projectArray);
    projectArray.forEach((element,index) => {
        
        if(element.name==currentProject){
            projectArray[index].todoList.push(document.getElementById('add-todo-input').value);
            todoText=document.createElement('p');
            todoText.innerText=document.getElementById('add-todo-input').value;

            todoDiv=document.createElement('div');
            todoDiv.classList.add('todo');

            todoBtn=document.createElement('button');
            todoBtn.innerText='Clear';
            todoBtn.setAttribute('id','todo-btn');
            todoDiv.append(todoText,todoBtn);
            document.getElementById('todos').insertBefore(todoDiv,document.getElementById('add-todo-input'));

            return  document.getElementById('todos');
        }

    });


};