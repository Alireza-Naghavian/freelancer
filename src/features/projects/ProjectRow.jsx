import React, { useState } from "react";
import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { TbPencilMinus } from "react-icons/tb";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { useRemoveProject } from "./hooks/useRemoveProject";
import dataConvertor from "../../utils/DateConvertor";
import Modal from "../../ui/Modal";
import SmallBtn from "../../ui/SmallBtn";
import toast from "react-hot-toast";
import CreateProjectForm from "./CreateProjectForm";
import ChangeStatusForm from "./ChangeStatusForm";
import {Link} from "react-router-dom"
function ProjectRow({ project, index }) {
  const { removeProject, isDelLoading } = useRemoveProject();
  const [OpenEditModal, setOpenEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteHandler = (id, status) => {
    if (status === "OPEN") {
      toast.error("پروژه قابل حذف نیست");
    } else {
      removeProject(id, { onSuccess: () => setDeleteModal(false) });
    }
  };
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project?.title, 30)}</td>
      <td className="">{project?.category?.title || "---"}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{dataConvertor(project?.deadline, "fa-IR")}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project?.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "-"}</td>
      <td>
        <ChangeStatusForm project={project}/>
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <button onClick={() => setOpenEditModal(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          {OpenEditModal && (
            <Modal
              open={() => setOpenEditModal(true)}
              close={() => setOpenEditModal(false)}
              title={`ویرایش پروژه (${project?.title})`}
            >
              <CreateProjectForm
              setEditProject={project}
                submitLabel={"ویرایش"}
                setOpenNewProject={setOpenEditModal}
              />
            </Modal>
          )}
          <button onClick={() => setDeleteModal(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          {deleteModal && (
            <Modal
              title={`حذف پروژه ${project?.title}`}
              open={() => setDeleteModal(true)}
              close={() => setDeleteModal(false)}
            >
              <div>
                <span className="font-VazirBold">
                  آیا از حذف پروژه {project.title} مطمئن هستید؟
                </span>
              </div>
              <div className="flex gap-x-10 mt-10 justify-end ">
                <SmallBtn
                  onClick={() => setDeleteModal(false)}
                  color={`bg-primary-800 text-white`}
                  hover={`bg-primary-100`}
                >
                  لغو
                </SmallBtn>
                <button
                  onClick={() => deleteHandler(project._id, project.status)}
                  disable={isDelLoading ? isDelLoading : undefined}
                  className={`border-red-500 border-2  px-4 py-2 rounded-xl text-red-600`}
                >
                  تایید
                </button>
              </div>
            </Modal>
          )}
        </div>
      </td>
      <td>
        <Link to={project._id}>
        
        <HiEye className="text-secondary-800 flex justify-center text-lg"/>
        </Link>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
