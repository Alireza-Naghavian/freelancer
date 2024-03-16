import React from 'react'
import Stat from '../owner/Stat';
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';

function Stats({users,projects,proposals}) {

    return (
    <div className='grid grid-cols-3 gap-x-8'>
       <Stat label={"پروژه ها"}
       value={projects}
       icon={<HiOutlineViewGrid className='w-16 h-16'/>}
       BgColor={`bg-primary-100`}
       textColor = {`text-primary-700`}

       />
       <Stat label={"تعداد کاربران"}
       value={users}
       icon={<HiCurrencyDollar className='w-16 h-16'/>}
       BgColor={`bg-green-100`}
       textColor = {`text-green-700`}
       />
       <Stat label={"درخواست ها"}
       value={proposals}
       icon={<HiCollection className='w-16 h-16'/>}
       BgColor={`bg-yellow-100`}
       textColor = {`text-yellow-700`}
       />
    </div>
  )
}

export default Stats