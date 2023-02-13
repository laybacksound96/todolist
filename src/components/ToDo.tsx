import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./Atoms";

export function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
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
