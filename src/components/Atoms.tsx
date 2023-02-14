import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}
export interface INewCategory {
  NewCategory: string;
}
export const NewCategoryState = atom<INewCategory[]>({
  key: "newCategories",
  default: [],
});
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const categoryState2 = atom({
  key: "category2",
  default: [],
});

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
