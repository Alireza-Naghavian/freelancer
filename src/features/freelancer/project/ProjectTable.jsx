import React from 'react'
import Table from '../../../ui/Table';
import Empty from '../../../pages/Empty';
import useProjects from '../../../hooks/useProjects';
import Loader from '../../../utils/Loader';
import ProjectRow from './ProjectRow';

function ProjectTable() {
     const {isLoading,projects}=useProjects()
 
     if(isLoading) return <Loader/>
    if (!projects.length) return <Empty resourceName="پروژه ای" />;
  return (
    <Table>
      <Table.Header>
      <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>ارسال درخواست</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => {
          return (
            <ProjectRow key={project?._id} project={project} index={index} />
          );
        })}
      </Table.Body>
    </Table>
  )
}

export default ProjectTable