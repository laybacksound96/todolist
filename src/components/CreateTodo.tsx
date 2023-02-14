import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./Atoms";

interface IForm {
  toDo: string;
}

function CreateTodo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, category, id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", { required: true })}
        placeholder="write a to do"
      ></input>
      <button>add</button>
    </form>
  );
}

export default CreateTodo;
