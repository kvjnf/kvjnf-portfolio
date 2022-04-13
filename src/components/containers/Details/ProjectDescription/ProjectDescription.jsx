import { loremIpsum } from "lorem-ipsum";
import DetailDescription from "../../../uiParts/DetailDescription/DetailDescription";


export default function ProjectDescription() {
  const description = {
    title: 'Test Project',
    client: 'client',
    description: loremIpsum({
      count: 5,
    })
  }

  return <DetailDescription {...description} />
}
