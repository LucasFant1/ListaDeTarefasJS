let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null)){
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icon">
              <i id="icone_${contador}" class="ri-circle-line"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
              ${valorInput}
            </div> 
            <div class="item-botao">
              <button onclick="deletar(${contador})" class="delete"><i class="ri-delete-bin-line"></i>Deletar</button>
            </div>
        </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    };
};

function marcarTarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");

    if(classe == "item") {
        item.classList.add("clicado");

        let icone = document.getElementById("icone_" + id);
        icone.classList.remove("ri-circle-line");
        icone.classList.add("ri-checkbox-circle-fill");

        item.parentNode.appendChild(item);
    }
    
    else{
        item.classList.remove("clicado");

        let icone = document.getElementById("icone_" + id);
        icone.classList.remove("ri-checkbox-circle-fill");
        icone.classList.add("ri-circle-line");
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        btnAdd.click();
    }
});

function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
};
