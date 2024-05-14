import Input from "components/Input/Input";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function SearchBar({ onTextChange, placeholder }) {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <Input
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
