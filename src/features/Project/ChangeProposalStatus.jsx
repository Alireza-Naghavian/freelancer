import { useForm } from "react-hook-form";
import RHFSelect from "../../pages/RHFSelect";
import useChangeProposalSt from "./hooks/useChangeProposalSt";
import LargeBtn from "../../ui/LargeBtn";
import Loader from "../../utils/Loader";
import { useParams } from "react-router-dom";

function ChangeProposalStatus({ proposalId, setOpenModal }) {
  const {id:projectId} = useParams();
    const {changeProposalST,changeStLoading}  = useChangeProposalSt();
    const chageStHandler =(data)=>{
        changeProposalST({proposalId,projectId,...data},{onSuccess:()=>{
            setOpenModal(false)
        }})
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
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form action="" onSubmit={handleSubmit(chageStHandler)}>
        <RHFSelect
          name={"status"}
          label={"تغییر وضعیت درخواست"}
          register={register}
          required
          options={options}
        />
      {changeStLoading ? <Loader/> :  <LargeBtn type={"submit"} >تغییر وضعیت</LargeBtn>}
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
