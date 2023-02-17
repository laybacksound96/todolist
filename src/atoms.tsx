import { atom, selector } from "recoil";
export const toDoState = atom({
  key: "toDo",
  default: ["🐱‍👤", "🤳", "💖", "🌹", "🎂", "🐱‍🏍"],
});
