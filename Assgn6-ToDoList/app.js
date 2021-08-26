const inp = document.querySelector('input');
const list = document.getElementById('list');
const todo_arr = [];

inp.addEventListener('keypress',(e) => {
    if(e.which === 13 && inp.value!=""){
        let todoText = inp.value;

        const div = document.createElement("div");
        div.className = "items";

        let task_box = document.createElement("input");
        task_box.setAttribute('type','text');
        task_box.value = todoText;
        task_box.className = 'task';

        const del = document.createElement("i");
        del.classList.add("fas","fa-trash-alt");
        const edit = document.createElement("i");
        edit.classList.add("fas","fa-edit");
        const up = document.createElement("i");
        up.classList.add("fas","fa-chevron-up");
        const down = document.createElement("i");
        down.classList.add("fas","fa-chevron-down");

        div.append(task_box,del,edit,up,down);
        list.append(div);
        todo_arr.push(div);

        task_box.disabled = true;
        inp.value="";

        del.addEventListener('click',(e)=> {
            e.target.parentElement.remove();
        });

        edit.addEventListener('click', (e)=> {
            if(task_box.disabled == true){
            let first = e.target.parentElement.firstChild;
            first.disabled = false;
            }
            else task_box.disabled = true;        
        });

        up.addEventListener('click',(e)=> {
           
        });

        down.addEventListener('click',(e)=> {

        });

    }
}); 