import { useState } from "react";
import Table from "../../../ui/Table";
import dataConvertor from "../../../utils/DateConvertor";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "./CreateProposalForm";
function ProjectRow({ project, index }) {
  const [openReq, setOpenReq] = useState(false);
  const { status } = project;
  const projectStatus = {
    OPEN: {
      label: "باز",
      className: "badge--success",
    },
    CLOSED: {
      label: "بسته",
      className: "badge--danger",
    },
  };
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="text-wrap">{truncateText(project?.title, 50)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{dataConvertor(project?.deadline, "fa-IR")}</td>
      <td className={`badge ${projectStatus[status].className}`}>
        <span>{projectStatus[status].label}</span>
      </td>
      <td onClick={() => setOpenReq(true)}>
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
      {openReq && (
        <Modal
          close={() => setOpenReq(false)}
          title={`درخواست انجام پروژه (${project.title})`}>

        <CreateProposalForm projectId={project._id} setOpenReq={setOpenReq} />
        </Modal>
      )}
    </Table.Row>
  );
}

export default ProjectRow;
