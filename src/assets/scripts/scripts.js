let addTask = document.querySelector("[data-tasks]") // seleção da <ul> onde será colocado as tarefas.
let taskButton = document.querySelector("[data-btn]"); // seleção do botão submit
let inputTask = document.querySelector("[data-receiveTask]"); // seleção da área do input.

function createLi() { // Função parar criar uma <li>
  const li = document.createElement("li");
  return li;
}

function clearInput() { // Função para limpar o input quando adicioanr uma tarefa.
  inputTask.value = ''; //limpa o valor do input
  inputTask.focus(); // adiciona focus no input
}

function deleteTaskBtn(li) {
  li.textContent += " ";
  const deleteBtn = document.createElement("button");
  const closeIcon = document.createElement("i");
  closeIcon.setAttribute("class", "fas fa-times-circle deleteBtn");
  closeIcon.setAttribute("title", "Apagar tarefa");
  li.appendChild(closeIcon);
}

function createTask(inputTask) {
  let li = createLi();
  li.textContent = inputTask;
  addTask.appendChild(li);
  clearInput();
  deleteTaskBtn(li);
};

taskButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputTask.value) return;
  createTask(inputTask.value);
})

document.addEventListener("click", function (e) {
  const element = e.target
  if (element.classList.contains("deleteBtn")) {
    element.parentElement.remove();
  }
})
