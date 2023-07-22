import PROGRAM from "./assets/program.json";
import COLORS from "./assets/colors.json";
import "./components/TaskCard.js";

const taskList = document.querySelector(".task-list");
const actualDate = document.querySelector(".actual-date");
const tagNowTime = document.querySelector(".now-time");

let date = new Date();
const optionsDate = { weekday: "long", day: "numeric" };
const optionsTime = { hour: "numeric", minute: "numeric", second: "numeric" };

actualDate.innerHTML = date.toLocaleDateString("es-BO", optionsDate).toUpperCase();
const endTimes = PROGRAM.map((task) => task.endTime);

setInterval(() => {
  date = new Date();
  const time = date.toLocaleTimeString("es-BO", optionsTime);
  tagNowTime.innerHTML = time;

  if (date.getSeconds() === 0) {
    if (endTimes.includes(time.slice(0, -3))) {
      const taskEndEvent = new CustomEvent("task-end", {
        detail: { from: "main", message: "Task end" },
        composed: true
      });
      taskList.firstChild.dispatchEvent(taskEndEvent);
    }
  }
}, 1000);

PROGRAM.forEach((task, index, array) => {
  const endTime = array[index - 1]?.endTime;
  const element = document.createElement("task-card");
  const colorIndex = index % COLORS.length;

  element.style.setProperty("--bg-color", COLORS[colorIndex]);
  element.setAttribute("data", JSON.stringify(task));
  if (index === 0) element.setAttribute("initial", "08:00");
  else element.setAttribute("initial", endTime);

  taskList.appendChild(element);
});
