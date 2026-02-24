const localStorageKey = 'to-do-list-morningstar';
const input = document.getElementById('input-new-task');

// Função para adicionar tarefa com o Enter
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita comportamento padrão

        newTask();
    }
})

// Função para validar se a tarefa já existe
function validateNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValue = document.getElementById("input-new-task").value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

// Função para adicionar uma nova tarefa
function newTask () {
    let input = document.getElementById("input-new-task");
    input.style.border = "";
    
    if (!input.value) {
        input.style.border = "1px solid red";
        alert("Digite algo para inserir em sua lista de tarefas!");
        input.focus(); // volta o cursor mesmo com erro
        return;
    }
    
    
    if (validateNewTask()) {
        alert("Essa tarefa já existe em sua lista!");
        input.focus();
        return;
    }
    
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    
    values.push({
        name: input.value
    });
        
    localStorage.setItem(localStorageKey, JSON.stringify(values));

    input.value = "";
    input.focus();
    showValues(); // atualiza a lista
}

// Função para exibir as tarefas salvas
function showValues () {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById("to-do-list");

    list.innerHTML = '';

    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `
        <li>
            ${values[i].name}
            <button id="btn-ok" onclick="removeTask(${i})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                </svg>
            </button>
        </li>
        `;
    }
}

// Função para remover uma tarefa
function removeTask(index) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");

    values.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
}

// Carrega as tarefas ao abrir a página
showValues();