import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./Atoms";

function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(event.currentTarget);
    setToDos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldTodos[targetIndex];
      const newToDo = { text, id, category: name };

      return oldTodos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && <button onClick={onClick}>Doing</button>}
      {category !== "TO_DO" && <button onClick={onClick}>To do</button>}
      {category !== "DONE" && <button onClick={onClick}>Done</button>}
    </li>
  );
}
export default ToDo;
