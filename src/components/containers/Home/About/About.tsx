import { useGetAboutQuery } from '../../../../services/api';
import AboutSection from '../../../uiParts/AboutSection/AboutSection';

export default function About() {
  const { data, isLoading, isError } = useGetAboutQuery();
  
  if (!data || isLoading || isError) {
    return null;
  }
  
  const { title, description } = data.items[0].fields;

  return (
    <AboutSection 
      title={title}
      description={description}
    />
  )
}
