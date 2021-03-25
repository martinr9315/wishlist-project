import React, { useState, MouseEvent } from "react";
import "clearblade-js-client";
//import "clearblade-js-client/lib/mqttws31"; no declaration file
//import { TopBackgroundImage } from "./topBackgroundImage";
import { ListItems } from "./listItems";
import { Form } from "./form";

const App: React.FC = () => {
  const [Container, setContainer] = useState<Array<ItemToDo>>([]);

  const UpdateContainerFromItem = (checkedItem: ItemToDo) => {
    const newList = Container.map((item) => {
      if (item === checkedItem) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setContainer(newList);
  };

  const RemoveItemFromContainer = (event: MouseEvent<HTMLButtonElement>) => {
    const newList = Container.filter(
      (item) => event.currentTarget.id !== item.id
    );
    setContainer(newList);
  };

  return (
    <div>
      <Form container={Container} newItemChange={setContainer} />
      <ListItems
        container={Container}
        itemChange={UpdateContainerFromItem}
        removeItem={RemoveItemFromContainer}
      />
    </div>
  );
};

export default App;
