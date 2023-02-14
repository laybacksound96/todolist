import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import AddCategories from "./AddCategories";
import {
  Categories,
  categoryState,
  NewCategoryState,
  toDoSelector,
} from "./Atoms";

import CreateTodo from "./CreateTodo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const NewCategories = useRecoilState(NewCategoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const CATEGORIES = [...Object.keys(Categories), ...NewCategories[0]];
  console.log(category);
  return (
    <div>
      <h1>to Dos</h1>
      <AddCategories />
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
