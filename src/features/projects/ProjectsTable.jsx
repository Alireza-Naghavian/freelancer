import Empty from "../../pages/Empty";
import Table from "../../ui/Table";
import Loader from "../../utils/Loader";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();
  console.log(isLoading);
  console.log(projects);
  if (isLoading) return <Loader />;
  if (projects.length) return <Empty />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => {
          <ProjectRow key={project._id} project={project} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
