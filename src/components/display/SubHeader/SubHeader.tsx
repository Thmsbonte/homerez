import "./SubHeader.scss";

interface Props {
  title?: string;
}

export const SubHeader = ({ title = "Sub Header" }: Props) => {
  return (
    <div className="sub-header">
      <p>{title}</p>
    </div>
  );
};
