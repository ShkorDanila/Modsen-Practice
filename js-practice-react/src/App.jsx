import "./App.css"
import TaskTemplate from "./TaskTemplate";
import { FormUseRef } from "./Tasks/FormUseRef/FormUseRef";
import { HideText } from "./Tasks/HideText/HideText";
import { InputMessage } from "./Tasks/InputNumber/InputNumber";

function App() {

  const TasksList = [
    {taskName: "Task 1", taskComp: <FormUseRef></FormUseRef>}, 
    {taskName: "Task 2", taskComp: <HideText text={"Это тестовый текст. Далее будет написано содержимое Подробнее. Привет мир."}></HideText>}, 
    {taskName: "Task 3", taskComp: <InputMessage></InputMessage>}, 
  ]

  return (
    <div className="App">
        {TasksList.map((task, iterator) => 
          <TaskTemplate taskName={task.taskName} taskComp={task.taskComp} key={iterator}></TaskTemplate>
        )}
    </div>
  );
}

export default App;
