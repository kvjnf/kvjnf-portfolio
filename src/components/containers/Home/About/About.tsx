import { useGetAboutQuery } from '../../../../services/api';
import AboutSection from '../../../uiParts/AboutSection/AboutSection';

export default function About() {
  const { data: { items }, isLoading, isError } = useGetAboutQuery();
  
  if (!items || isLoading || isError) {
    return null;
  }
  
  const { title, description } = items[0].fields;

  return (
    <AboutSection 
      title={title}
      description={description}
    />
  )
}
