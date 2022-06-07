// Module for updating todos information

export default function TodoLoad(){
    const allTodos=document.querySelectorAll('.todo');
    allTodos.forEach(element=>{
        element.innerHTML='';
    })

};