// Module for updating todos information

export default function TodoLoad(projectArray,currentProject){
    const todosField=document.getElementById('todos');
// currentProject - index in the projectArray of the project that needs its todos to be loaded
        projectArray[currentProject].todoList.forEach((element,index) => {
            todoDiv=document.createElement('div');
            todoDiv.classList.add('todo');
            todoText=document.createElement('p');
            todoText.innerText=`${projectArray[currentProject].todoList[index]}`;
            todoBtn=document.createElement('button');
            todoBtn.innerText='Clear';
            todoBtn.setAttribute('id','todo-btn');
            todoDiv.append(todoText,todoBtn);
            console.log(todoDiv);
            todosField.insertBefore(todoDiv,document.getElementById('add-todo-input'));
        });
        return todosField;

};