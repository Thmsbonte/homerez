import "./MainTitle.scss";

interface Props {
  title?: string;
}

export const MainTitle = ({ title = "Main Title" }: Props) => {
  return <div className="main-title">{title}</div>;
};
