import { ITodo } from "./Atoms";

export function ToDo({ text }: ITodo) {
  return (
    <li>
      <span>{text}</span>
      <button>To do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}
