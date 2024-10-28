import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const inputValueTrimed = inputValue.trim();
    if (inputValueTrimed.length <= 1) return;
    onNewCategory(inputValueTrimed);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
