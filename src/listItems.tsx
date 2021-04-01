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
  let containerLength = container.length;
  let lastContainerItem = container[containerLength - 1];

  if (containerLength >= 1) {
    if (lastContainerItem.item_id === "") {
      const uniqueItemId = uuidv4();
      lastContainerItem.item_id = uniqueItemId;
    }
    return (
      <ul>
        {container.map((Eachitem) => {
          return (
            <ListItem
              key={Eachitem.item_id}
              item={Eachitem}
              itemChange={itemChange}
              id={Eachitem.item_id}
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
