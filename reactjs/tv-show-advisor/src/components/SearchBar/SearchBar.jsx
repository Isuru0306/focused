import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";
import s from "./style.module.css";
export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      if (onSubmit) {
        onSubmit(e.target.value);
        setValue("");
      }
    }
  };

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={(e) => handleSearch(e)}
        className={s.input}
        onChange={handleChange}
        type="text"
        value={value}
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
}
