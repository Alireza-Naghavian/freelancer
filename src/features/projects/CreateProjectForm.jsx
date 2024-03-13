import LargeBtn from "../../ui/LargeBtn";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import ValidTextField from "../../ui/ValidTextField";
import RHFSelect from "../../pages/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./hooks/useCreateProject";
import Loader from "../../utils/Loader";
import useEditProject from "./hooks/useEditProject";
function CreateProjectForm({
  setOpenNewProject,
  setEditProject = {},
  submitLabel,
}) {
  const { _id: editId } = setEditProject;
  const isEditProject = Boolean(editId);
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = setEditProject;
  let editValues = {};
  if (isEditProject) {
    editValues = {
      title,
      description,
      budget,
      category: category?._id,
      
    };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ defaultValues: editValues });

  
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories, isPending, transformedCategories } = useCategories();
  const { isLoading, createProject } = useCreateProject();

  const { isLoading: isEditLoading, editProject } = useEditProject();
  const submitHandler = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditProject) {
      editProject(
        { id: editId, newProject }, {
          onSuccess: () => {
            setOpenNewProject(false)
            reset();
          },
        }
      );
    
    } else {
      createProject(newProject, {
        onSuccess: () => {
          setOpenNewProject(false);
          reset();
        },
      });
    }
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
            value: 10,
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
      <RHFSelect
        label={"دسته بندی"}
        register={register}
        name="category"
        options={categories || "programming"}
        required
      />
      <div className="flex flex-col items-start">
        <label htmlFor="tags" className="">
          تگ ها
        </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label={"ددلاین"} />
      {isLoading ? (
        <Loader />
      ) : (
        <LargeBtn type={"submit"}>{submitLabel}</LargeBtn>
      )}
    </form>
  );
}

export default CreateProjectForm;
