import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectLogo from '../containers/Details/ProjectLogo/ProjectLogo';
import ProjectDemo from '../containers/Details/ProjectDemo/ProjectDemo';
import ProjectDescription from '../containers/Details/ProjectDescription/ProjectDescription';

export default function Detail() {
  const params = useParams();

  useEffect(() => {
    console.log(params.postId);
  }, [params]);

  return (
    <>
      <ProjectLogo />
      <ProjectDemo />
      <ProjectDescription />
    </>
  )
}
