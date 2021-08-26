const inp = document.querySelector('input');
const list = document.getElementById('list');

inp.addEventListener('keypress',(e) => {
    if(e.which === 13 && inp.value!=""){
        let todoText = inp.value;

        const div = document.createElement("div");
        div.className = "items";

        let input = document.createElement("input");
        input.setAttribute('type','text');
        input.value = todoText;
        input.className = 'tasks';

        const del = document.createElement("i");
        del.classList.add("fas","fa-trash-alt");
        const edit = document.createElement("i");
        edit.classList.add("fas","fa-edit");
        const up = document.createElement("i");
        up.classList.add("fas","fa-chevron-up");
        const down = document.createElement("i");
        down.classList.add("fas","fa-chevron-down");

        div.append(input,del,edit,up,down);
        list.append(div);

        input.disabled = true;

        inp.value="";

    }
}); 