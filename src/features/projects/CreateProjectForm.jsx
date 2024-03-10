import LargeBtn from "../../ui/LargeBtn";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import ValidTextField from "../../ui/ValidTextField";
function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form
      className="gap-y-6 flex flex-col"
      onSubmit={handleSubmit(submitHandler)}
    >
      <ValidTextField
        label={"عنوان پروژه"}
        placeholder={"عنوان پروژه را بنویسید..."}
        register={register}
        required
        name={"title"}
        spaceY={"space-y-2"}
        validationSchema={{
          required: "پر کردن این فیلد الزامی است",
          minLength: {
            value: 10,
            message: "تعداد کاراکتر باید بیشتر از ۱۰ عدد باشد",
          },
        }}
        errors={errors}
      ></ValidTextField>
      <ValidTextField
        label={"توضیحات پروژه"}
        placeholder={"توضیحات مورد نیاز را وارد نمایید..."}
        register={register}
        required
        name={"description"}
        spaceY={`space-y-2`}
        validationSchema={{
          required: "پرکردن این فیلد الزامی است",
          minLength: {
            value: 15,
            message: "تعداد کاراکتر باید بیشتر از ۱۵ عدد باشد",
          },
        }}
      ></ValidTextField>
      <ValidTextField
        type="Number"
        register={register}
        placeholder={"بودجه مد نظر را وارد نمایید..."}
        required
        label={"بودجه پروژه"}
        name={"budget"}
        spaceY={"space-y-2"}
        validationSchema={{
          required: "پرکردن این فیلد الزامی است",
        }}
      ></ValidTextField>

      <LargeBtn type={"submit"}>افزودن</LargeBtn>
    </form>
  );
}

export default CreateProjectForm;
