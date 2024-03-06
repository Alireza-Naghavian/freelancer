import { useState } from "react";
import TextField from "../../ui/TextField";
import LargeBtn from "../../ui/LargeBtn";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../utils/Loader";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("OWNER");
  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const CompleteProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ name, email, role });
      console.log(data);
      if (data.user.role === "OWNER") {
        navigate("/owner");

        toast.success(data.message);
        return;
      }
      if (data.user.role === "FREELANCER") {
        navigate("/freelancer");
        toast.success(data.message);
        return;
      }

      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-full px-12">
      <p className="pt-6 text-sm">لطفا پروفایل کاربری خود را تکمیل کنید.</p>
      <form className="w-full" onSubmit={CompleteProfileHandler}>
        <TextField
          mt={`mt-8`}
          spaceY={`space-y-4`}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={`لطفا ایمیل معتبر وارد کنید...`}
          value={email}
          name={"email"}
          label={`ایمیل`}
        />
        <TextField
          mt={`mt-10`}
          spaceY={`space-y-4`}
          onChange={(e) => setName(e.target.value)}
          placeholder={`نام و نام خانوادگی...`}
          value={name}
          name={"name"}
          label={`نام و نام خانوادگی`}
        />
        <div className="flex mt-8 mr-4 gap-x-6">
          <div className="flex gap-x-1 items-center">
            <input
              className="form-radio text-primary-700 focus:ring-1 focus:outline-none"
              type="radio"
              name="role"
              id="owner"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <label htmlFor="owner">کارفرما</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              className="form-radio text-primary-700 focus:ring-1 focus:outline-none"
              type="radio"
              name="role"
              id="freelancer"
              value="FREELANCER"
              checked={role === "FREELANCER"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="freelancer">فریلنسر</label>
          </div>
        </div>
        <div>
          {isPending ? (
            <Loader />
          ) : (
            <LargeBtn type={"submit"}>تکمیل اطلاعات</LargeBtn>
          )}
        </div>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
