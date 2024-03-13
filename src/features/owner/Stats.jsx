import React from 'react'
import { HiCollection, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from './Stat';
import { HiCurrencyDollar } from 'react-icons/hi2';

function Stats({projects}) {
    const numberOfProjects = projects.length;
    const numbOfAcceptedProject  = projects.map((item)=> item?.status === 2).length
   const numOfProposals =  projects.reduce((acc,curr)=> curr.proposals.length + acc ,0)
    return (
    <div className='grid grid-cols-3 gap-x-8'>
       <Stat label={"پروژه ها"}
       value={numberOfProjects}
       icon={<HiOutlineViewGrid className='w-16 h-16'/>}
       BgColor={`bg-primary-100`}
       textColor = {`text-primary-700`}

       />
       <Stat label={" پروژه ها واگذاری شده"}
       value={numbOfAcceptedProject}
       icon={<HiCurrencyDollar className='w-16 h-16'/>}
       BgColor={`bg-green-100`}
       textColor = {`text-green-700`}
       />
       <Stat label={"درخواست ها"}
       value={numOfProposals}
       icon={<HiCollection className='w-16 h-16'/>}
       BgColor={`bg-yellow-100`}
       textColor = {`text-yellow-700`}
       />
    </div>
  )
}

export default Stats