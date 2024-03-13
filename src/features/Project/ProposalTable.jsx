import Empty from "../../pages/Empty";
import Table from "../../ui/Table";
import ProjectRow from "../projects/ProjectRow";
import ProposalsRow from "./ProposlaRow";
import useSingleProjectData from "./hooks/useSignelProjectData";

function ProposalTable({  }) {
   const {project}=useSingleProjectData()
console.log(project.proposals);
  if (!project?.proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {project?.proposals.map((proposal, index) => {
          return (
            <ProposalsRow key={proposal._id} proposal={proposal} index={index} />
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
