import React from 'react'
import DashBoardHeader from './DashBoardHeader'
import Stats from './Stats'
import useProposals from '../proposals/hooks/useProposals'

function DashBoardLayout() {
    const {proposals}=useProposals()
  return (
    <div>
        <DashBoardHeader/>
        <Stats proposals={proposals}/> 
    </div>
  )
}

export default DashBoardLayout