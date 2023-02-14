import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState, NewCategoryState } from "./Atoms";

interface INewCategory {
  NewCategory: string;
}

export default function AddCategories() {
  const addCategories = useSetRecoilState(NewCategoryState);
  const setCurrentCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit } = useForm();

  const onValid = ({ NewCategory }: INewCategory) => {
    setCurrentCategory(() => NewCategory as any);
    addCategories((oldCategories) => {
      return [...oldCategories, NewCategory] as any;
    });
  };
  return (
    <form onSubmit={handleSubmit(onValid as any)}>
      <input placeholder="Create New Category" {...register("NewCategory")} />
    </form>
  );
}
