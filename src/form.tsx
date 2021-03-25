import React, { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddButton } from "./ui/button";
import { InputText } from "./ui/inputText";

interface formProperties {
  container: Array<ItemToDo>;
  newItemChange: (container: Array<ItemToDo>) => void;
}

export const Form: React.FC<formProperties> = ({
  container,
  newItemChange,
}) => {
  const [newItemText, setNewItemText] = useState<string>("");

  const [newItemId, setNewItemId] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItemId(uuidv4());
    setNewItemText(event.currentTarget.value);
  };

  const addNewItemToContainer = (itemText: string, itemId: string) => {
    newItemChange([
      ...container,
      { text: itemText, complete: false, id: itemId },
    ]);
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addNewItemToContainer(newItemText, newItemId);
    setNewItemText("");
  };

  return (
    <form>
      <InputText
        value={newItemText}
        type="text"
        onChange={handleChange}
      ></InputText>
      <AddButton
        type="submit"
        onClick={handleSubmit}
        disabled={newItemText.length < 1}
      >
        Add
      </AddButton>
    </form>
  );
};
