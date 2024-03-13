import { HiArrowRight } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

function ProposalHeader({project}) {
    const Navigate = useNavigate()
  return (
    <div className="flex items-center gap-x-4">
        <button onClick={()=>Navigate(-1)}> 
            <HiArrowRight className="w-5 h-5 text-secondary-500"/>
        </button>
        <h1 className="font-VazirBlack text-secondary-700 text-xl">
            لیست درخواست های {project?.title}
        </h1>
    </div>
  )
}

export default ProposalHeader