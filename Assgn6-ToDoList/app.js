const inp = document.querySelector('input');
const list = document.getElementById('list');

inp.addEventListener('keypress',(e) => {
    if(e.which === 13){
        const todoText = inp.value;
        let input = document.createElement("input");
        input.setAttribute('type','text');

        // input.innerHTML = todoText;
        list.append(input);

        inp.value="";

    }
});