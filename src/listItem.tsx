import React, { MouseEvent } from "react";

interface ListItemProperties {
  item: ItemToDo;
  itemChange: (checkedItem: ItemToDo) => void;
  id: string;
  removeItem: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ListItem: React.FC<ListItemProperties> = ({
  item,
  itemChange,
  removeItem,
}) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={item.complete}
          onChange={() => itemChange(item)}
        />
        <span
          style={{
            textDecoration: item.complete ? "line-through" : "none",
          }}
        >
          {item.text}
        </span>
      </label>
      <button id={item.item_id} onClick={removeItem}>
        Remove item
      </button>
    </div>
  );
};
