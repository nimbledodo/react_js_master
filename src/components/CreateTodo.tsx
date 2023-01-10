import { useForm, SubmitHandler } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, categoryState } from "../atoms";

interface IForm {
  toDo: string;
}

interface ICat {
  cat: string;
}

function CreateTodo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  const {
    register: registerCat,
    handleSubmit: handleSubmitCat,
    setValue: setValueCat,
  } = useForm<ICat>();
  const onSubmit: SubmitHandler<ICat> = ({ cat }: ICat) => {
    console.log(cat);
    setValueCat("cat", "");
  };

  return (
    <>
      <form onSubmit={handleSubmitCat(onSubmit)}>
        <input
          {...registerCat("cat", {
            required: "Please write a new category name",
          })}
          placeholder="Add a new category"
        />
        <button>Add Category</button>
      </form>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a todo",
          })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateTodo;
