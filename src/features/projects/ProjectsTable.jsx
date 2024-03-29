import Empty from "../../pages/Empty";
import Table from "../../ui/Table";
import Loader from "../../utils/Loader";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName={"پروژه ای"} />;
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
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        { projects.map((project, index) => {
      return  <ProjectRow key={project?._id} project={project} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
