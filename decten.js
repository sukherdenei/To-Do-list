{
  /* <div class="todoList">
          <div class="title">
            <div class="circle"></div>
            <h2>To do</h2>
            <p class="count">5</p>
          </div>
          <div class="list">
            <div class="listItem">
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
            <div class="listItem">
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
          </div>
        </div> */
}
const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id: "todo",
  },
  {
    title: "In progress",
    count: 5,
    color: "white",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
  },
];
const todoData = [
  {
    title: "Geree tseverleh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Shine jildee yvah",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Huvtssaa beldeh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Usand oroh",
    date: "2024-12-09",
    state: "done",
  },
  {
    title: "Showuudah",
    date: "2024-12-09",
    state: "blocked",
  },
];

const clearContainers = () => {
  const container1 = document.getElementById("todo");
  const container2 = document.getElementById("in-progress");
  const container3 = document.getElementById("done");
  const container4 = document.getElementById("blocked");
  container1.innerHTML = null;
  container2.innerHTML = null;
  container3.innerHTML = null;
  container4.innerHTML = null;
};

function renderContainers(title, color, count, id) {
  //html div iig bariad avsan
  const taskContainer2 = document.querySelector("#taskContainer");

  //todoList = <div class="todoList">
  //   <div class="title"></div>
  // </div>
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");

  const listItemParent = document.createElement("div");
  listItemParent.setAttribute("id", id);

  // title = <div class="title"></div>
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");

  todoList.appendChild(titleDiv);
  todoList.appendChild(listItemParent);
  // <h2>To do</h2>
  const h2 = document.createElement("h2");
  h2.innerText = title;

  // <div style={backgroundColor:"white" } class="circle"></div>
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;

  // <p class="count"></p>
  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;

  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);
  taskContainer2.appendChild(todoList);
}

containerItems.map((item) => {
  renderContainers(item.title, item.color, item.count, item.id);
});

const deleteTodo = (index) => {
  console.log("Ymar index", index);
  todoData.splice(index, 1);
  clearContainers();
  todoData.map((item, index) => {
    renderTodoItems(item.title, item.date, item.state, index);
  });
};

const renderTodoItems = (title, date, state, index) => {
  console.log(title, index);
  const container = document.getElementById(state);
  const listItem = document.createElement("div");
  const text = document.createElement("p");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.setAttribute("id", index);
  deleteButton.addEventListener("click", () => {
    deleteTodo(index);
  });
  listItem.appendChild(deleteButton);
  text.innerText = title;
  listItem.appendChild(text);
  listItem.setAttribute("class", "listItem");
  container.appendChild(listItem);
};

todoData.map((item, index) => {
  renderTodoItems(item.title, item.date, item.state, index);
});

const addTask = () => {
  if (input.value) {
    todoData.push({
      title: input.value,
      date: "2024-12-12",
      state: "todo",
    });
    input.value = null;
    clearContainers();
    todoData.map((item, index) => {
      renderTodoItems(item.title, item.date, item.state, index);
    });
  }
};

const input = document.getElementById("input");
const addButton = document.getElementById("button");
addButton.addEventListener("click", addTask);
