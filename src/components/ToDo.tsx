import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, ITodo, NewCategoryState, toDoState } from "./Atoms";
function ToDo({ text, id, category }: ITodo) {
  const NewCategories = useRecoilValue(NewCategoryState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const CATEGORIES = [...Object.keys(Categories), ...NewCategories];

  return (
    <li>
      <span>{text}</span>
      {CATEGORIES.map(
        (key: any, index: number) =>
          category !== key && (
            <button key={`button-${index}`} name={key} onClick={onClick}>
              {key}
            </button>
          )
      )}
    </li>
  );
}
export default ToDo;
