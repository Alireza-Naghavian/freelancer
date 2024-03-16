import { Switch } from "@headlessui/react";
import { useState } from "react";
import useChangeStatusProject from "../features/projects/hooks/useChangeStatusProject";
import Loader from "../utils/Loader";
function ChangeStatus({ project }) {
     const {changeStLoading,changeStatus}=useChangeStatusProject()
  const [enabled, setEnabled] = useState(project.status === "OPEN" ? true : false);
  const status = project.status === "OPEN" ? "CLOSED" : "OPEN"
  const changeHandler = () => {
    changeStatus({id:project._id,data:{status}},{onSuccess:()=>{setEnabled(is=>!is)}})
  };
  return (
    <div>
     {changeStLoading? <Loader width="50" height="10" mt="10px"/> : <Switch.Group>
        <div className="flex items-center  gap-x-2" dir="rtl">
          <Switch.Label className="">
            {project.status === "OPEN" ? "باز" : "بسته"}
          </Switch.Label>
          <Switch
            checked={enabled}
            onChange={changeHandler}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
          >
            <span
              className={`${
                enabled ? "-translate-x-6" : "-translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>}
    </div>
  );
}

export default ChangeStatus;
