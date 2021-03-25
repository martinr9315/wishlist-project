import React, { useState, MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { ListItem } from "./listItem";

interface ListProperties {
  container: Array<ItemToDo>;
  itemChange: (checkedItem: ItemToDo) => void;
  removeItem: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ListItems: React.FC<ListProperties> = ({
  container,
  itemChange,
  removeItem,
}) => {
  if (container.length >= 1) {
    return (
      <ul>
        {container.map((Eachitem) => {
          const uniqueItemId = uuidv4();
          return (
            <ListItem
              key={uniqueItemId}
              item={Eachitem}
              itemChange={itemChange}
              id={uniqueItemId}
              removeItem={removeItem}
            />
          );
        })}
      </ul>
    );
  } else {
    return <div>Empty</div>;
  }
};
