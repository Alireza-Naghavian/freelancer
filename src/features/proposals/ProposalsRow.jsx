import React from 'react'
import Table from '../../ui/Table'
import { toPersianNumbers, toPersianNumbersWithComma } from '../../utils/toPersianNumbers'
import truncateText from '../../utils/truncateText'

function ProposalsRow({proposal,index}) {
    const statusStyles = [
        {
          label: "رد شده",
          className: "badge--danger",
        },
        {
          label: "در انتظار تایید",
          className: "badge--primary ",
        },
        {
          label: "تایید شده",
          className: "badge--success",
        },
      ];
  return (
    <Table.Row>
    <td>{index + 1}</td>
    <td className='text-wrap w-full'>{truncateText(proposal?.description, 100)}</td>
    <td >{toPersianNumbers(proposal?.duration || "---")} روز</td>
    <td>{`${(proposal.price).toLocaleString("FA-IR")} تومان`}</td>
    <td className={`${statusStyles[proposal?.status].className}`}>{statusStyles[proposal?.status].label}</td>

  </Table.Row>
  )
}

export default ProposalsRow