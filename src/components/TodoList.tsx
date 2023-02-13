import { useRecoilValue } from "recoil";
import { toDoState } from "./Atoms";

import CreateTodo from "./CreateTodo";
import { ToDo } from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  console.log(toDos);
  return (
    <div>
      <h1>to Dos</h1>
      <hr />
      <CreateTodo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
