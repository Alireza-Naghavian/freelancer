import ProjectsTable from "../features/projects/ProjectsTable";
import LargeBtn from "./LargeBtn";
import { FaPlus } from "react-icons/fa";
import SmallBtn from "./SmallBtn";
import { useState } from "react";
import Modal from "./Modal";
import CreateProjectForm from "../features/projects/CreateProjectForm";
function Projects() {
  const [openNewProject, setOpenNewProject] = useState(false);

  return (
    <div className="row-span-10 ">
      <div className=" flex justify-end  items-baseline ml-10 mt-12 ">
        <div onClick={() => setOpenNewProject(true)}>
          <SmallBtn color={`bg-primary-900 text-white`}>
            <FaPlus />
            افزودن پروژه جدید
          </SmallBtn>
        </div>
      </div>
      {openNewProject && (
        <Modal
          title={"افزودن پروژه جدید"}
          close={() => setOpenNewProject((is) => !is)}
          open={() => setOpenNewProject(true)}
        >
          <CreateProjectForm submitLabel={"افزودن"} setOpenNewProject={setOpenNewProject} />
        </Modal>
      )}
      <ProjectsTable />
    </div>
  );
}

export default Projects;
