import { useParams } from 'react-router-dom';

import ProjectLogo from '../containers/Details/ProjectLogo/ProjectLogo';
import ProjectDemo from '../containers/Details/ProjectDemo/ProjectDemo';
import ProjectDescription from '../containers/Details/ProjectDescription/ProjectDescription';
import ProjectCaptures from '../containers/Details/ProjectCaptures/ProjectCaptures';
import { useGetProjectQuery } from '../../services/api';

export default function Detail() {
  const { slug } = useParams();
  const { 
    data: { fields, resources },
    isLoading,
  } = useGetProjectQuery(slug);

  if (isLoading) {
    return null;
  }

  const logo = resources[fields.thumbnail];
  const devices = {
    pc: {
      src: resources[fields.pcCapture],
      alt: `pc capture: ${fields.slug}`
    },
    ...fields.spCapture && { 
      sp: { 
        src: resources[fields.spCapture],
        alt: `sp capture: ${fields.slug}`,        
       } 
    }
  };
  const description = {
    title: fields.title,
    client: fields.client,
    description: fields.description,
  };
  const captures = fields.captures?.map(id => resources[id]) ?? [];

  return (
    <>
      <ProjectLogo logo={logo} />
      <ProjectDemo devices={devices}/>
      <ProjectDescription description={description} />
      <ProjectCaptures captures={captures}/>
    </>
  )
}
