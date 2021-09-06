import "./SearchInput.scss";

// Libraries import
import { KeyboardEventHandler, ChangeEventHandler } from "react";

// Component interface
interface Props {
  title?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  value?: string;
}

export const SearchInput = ({
  title = "Search title",
  placeholder = "Placeholder",
  onChange,
  onKeyPress,
  value = "",
}: Props) => {
  return (
    <div className="search-input">
      <p>{title}</p>
      <input
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value && value}
      ></input>
    </div>
  );
};
