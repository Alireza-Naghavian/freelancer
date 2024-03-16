import React from 'react'
import ChangeStatus from '../../ui/ChangeStatus'
import useChangeStatusProject from './hooks/useChangeStatusProject'

function ChangeStatusForm({project}) {
    const {changeStLoading,changeStatus}= useChangeStatusProject()

  return (
    <div>
        <ChangeStatus changeStatus={changeStatus} project={project}/>
    </div>
  )
}

export default ChangeStatusForm