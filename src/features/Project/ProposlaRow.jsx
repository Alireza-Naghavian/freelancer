import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import ChangeProposalStatus from "./ChangeProposalStatus";

function ProposalsRow({ proposal, index }) {
  const [openModal, setOpenModal] = useState(false);
  const statusStyles = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      className: "badge--primary ",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal?.user?.name}</td>
      <td className=" line-clamp-3 overflow-y-hidden text-wrap">
        {truncateText(proposal.description, 50)}
      </td>
      <td>{proposal?.duration}روز</td>
      <td>{proposal?.price}</td>
      <td
        className={` ${statusStyles[proposal?.status].className}  rounded-xl`}
      >
        <span className="text-white">
          {statusStyles[proposal?.status].label}
        </span>
      </td>
      <td>
        {openModal && (
          <Modal
            close={() => setOpenModal(false)}
            title={`تغییر وضیعت درخواست`} >

                <ChangeProposalStatus proposalId={proposal._id} setOpenModal={setOpenModal}/>
            </Modal>
        )}

        <button className="bg-slate-200 px-2 py-2 rounded-lg text-primary-800" onClick={() => setOpenModal(true)}>تغییر وضعیت درخواست</button>
      </td>
    </Table.Row>
  );
}

export default ProposalsRow;
