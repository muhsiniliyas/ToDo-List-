function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-text");

  const circle = document.createElement("span");
  circle.classList.add("circle");

  const text = document.createElement("span");
  text.classList.add("text");
  text.textContent = taskText;

  taskDiv.appendChild(circle);
  taskDiv.appendChild(text);

  taskDiv.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(taskDiv);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
