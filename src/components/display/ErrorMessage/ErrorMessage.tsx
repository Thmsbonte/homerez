import "./ErrorMessage.scss";

// Component interface
interface Props {
  errorMessage?: string;
}

export const ErrorMessage = ({ errorMessage = "" }: Props) => {
  return <p className="error-message">{errorMessage}</p>;
};
