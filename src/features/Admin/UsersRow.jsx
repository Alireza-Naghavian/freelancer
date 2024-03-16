import { useState } from "react";
import Table from "../../ui/Table";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "../Project/ChangeProposalStatus";
import ChangeStatusUserForm from "./ChangeStatusUserForm";

function UsersRow({ user, index }) {
  const { status } = user;
  const [openModal, setOpenModal] = useState(false);
  const userStatus = [
    {
        label:"بن شده",
        className:"badge--danger"
    },
    {
        label:"در انتظار تایید",
        className:"badge--primary"
    },
    {
        label:"تایید شده",
        className:"badge--success"
    }
  ]
  return (
    <Table.Row>
      <td className="">{index   + 1}</td>
      <td className="">{user.name}</td>
      <td className="text-wrap">{user.email}</td>
      <td className="">{user.phoneNumber}</td>
      <td className="">{user.role}</td>
      <td className={`badge ${userStatus[status].className}`}>
        <span>{userStatus[status].label}</span>
      </td>
   
      <td>
        {openModal && (
          <Modal
            close={() => setOpenModal(false)}
            title={`تغییر وضیعت کاربر`}
          >
            <ChangeStatusUserForm
              userId={user._id}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}

        <button
          className="bg-slate-200 px-2 py-2 rounded-lg text-primary-800"
          onClick={() => setOpenModal(true)}
        >
          تغییر وضعیت کاربر
        </button>
      </td>
    </Table.Row>
  );
}

export default UsersRow;
