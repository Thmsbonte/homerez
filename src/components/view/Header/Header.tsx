import "./Header.scss";

// Component interface
interface Props {
  children?: JSX.Element;
}

export const Header = ({ children }: Props) => {
  return <div className="header">{children}</div>;
};
