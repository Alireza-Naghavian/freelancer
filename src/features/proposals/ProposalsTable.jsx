import React from 'react'
import useProposals from './hooks/useProposals'
import Table from '../../ui/Table';
import ProposalsRow from './ProposalsRow';
import Empty from '../../pages/Empty';
import Loader from '../../utils/Loader';

function ProposalsTable() {
  const {proposals,isLoading} =   useProposals();
  if (isLoading) return <Loader />;

  if (!proposals.length) return <Empty resourceName={"درخواستی "} />;
  return (
    <Table>
      <Table.Header>
      <th>#</th>
      <th>توضیحات</th>
      <th>زمان تحویل</th>
      <th>هزینه</th>
      <th>وضعیت</th>
       
      </Table.Header>
      <Table.Body>
        { proposals.map((proposal, index) => {
      return  <ProposalsRow key={proposal?._id} proposal={proposal} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable