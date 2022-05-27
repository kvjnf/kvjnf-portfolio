import DetailDescription from "../../../uiParts/DetailDescription/DetailDescription";

interface IProps {
  description: {
    title: string;
    client?: string;
    description: string;
  }
}

export default function ProjectDescription({ description }: IProps) {
  return <DetailDescription {...description} />
}
