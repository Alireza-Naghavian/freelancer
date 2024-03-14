import ProposalTable from "../features/Project/ProposalTable"
import ProposalsTable from "../features/proposals/ProposalsTable"

function Proposals() {
  return (
    <div>
        <h1 className="font-VazirBlack text-secondary-700 text-xl mb-8">
            پروپوزال های شما
        </h1>
        <ProposalsTable/>
    </div>
  )
}

export default Proposals