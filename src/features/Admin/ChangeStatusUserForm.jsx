import { useForm } from "react-hook-form"
import RHFSelect from "../../pages/RHFSelect";
import useChangeUserStatus from "./hooks/useChangeUserStatus";
import Loader from "../../utils/Loader";
import LargeBtn from "../../ui/LargeBtn";
import { useQueryClient } from "@tanstack/react-query";

function ChangeStatusUserForm({userId,setOpenModal}) {
    const {handleSubmit,register,formState:{errors}} = useForm();
    const queryClient = useQueryClient();
  const {ChangeUserSt,isLoading} =  useChangeUserStatus();
  const changeStHandler =(data)=>{
    ChangeUserSt({userId,data},{
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["users"]})
            setOpenModal(false)
        }
    })
}
    const options = [
        {
          label: "رد شده",
          value: 0,
        },
        {
          label: "در انتظار تایید",
          value: 1,
        },
        {
          label: "تایید شده",
          value: 2,
        },
      ];
  return (
    <form onSubmit={handleSubmit(changeStHandler)}>
         <RHFSelect
          name={"status"}
          label={"تغییر وضعیت کاربر"}
          register={register}
          required
          options={options}
        />
    {isLoading ? <Loader/> : <LargeBtn type={"submit"}>تایید</LargeBtn>}
    </form>

  )
}

export default ChangeStatusUserForm