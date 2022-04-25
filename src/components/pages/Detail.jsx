import { useParams } from 'react-router-dom';

import ProjectLogo from '../containers/Details/ProjectLogo/ProjectLogo';
import ProjectDemo from '../containers/Details/ProjectDemo/ProjectDemo';
import ProjectDescription from '../containers/Details/ProjectDescription/ProjectDescription';
import ProjectCaptures from '../containers/Details/ProjectCaptures/ProjectCaptures';
import { useGetProjectQuery } from '../../services/api';

export default function Detail() {
  const { slug } = useParams();
  const { data } = useGetProjectQuery(slug);

  console.log(data);

  return (
    <>
      <ProjectLogo />
      <ProjectDemo />
      <ProjectDescription />
      <ProjectCaptures />
    </>
  )
}
