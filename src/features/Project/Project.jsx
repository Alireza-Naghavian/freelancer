import useSingleProjectData from "./hooks/useSignelProjectData";
import Loader from "../../utils/Loader";
import ProposalHeader from "./ProposalHeader";
import ProposalTable from "./ProposalTable";

function Project() {
  const { project, isProjectLoading } = useSingleProjectData();
  if (isProjectLoading) return <Loader />;
  return (
    <div className="container px-8 py-4">
      <ProposalHeader project={project} />
      <ProposalTable proposals={project?.proposals} />
    </div>
  );
}

export default Project;
