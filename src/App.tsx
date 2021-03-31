import React, { useState, MouseEvent } from "react";
//import { TopBackgroundImage } from "./topBackgroundImage";
import { ListItems } from "./listItems";
import { Form } from "./form";
import { ClearBlade } from "clearblade-js-client";

var cb = new ClearBlade();
var query = cb.Query({ collectionID: "e29ed5850caeb5bf99949ef0938b01" });

cb.init({
  URI: "https://platform.clearblade.com", // e.g., 'https://platform.clearblade.com'
  systemKey: "bec1b3850c8ed09188a3fbc4fcd301",
  systemSecret: "BEC1B3850C849DA9B9F9DCD7D27C",
  email: "sengchow1996@g.ucla.edu", // use registerEmail instead if you wish to create a new user
  password: "Posb83604842!",
  callback: initCallback,
});

function initCallback(err: boolean, cb: IClearBlade) {
  // err is a boolean, cb has APIs and constructors attached
  if (err) {
    throw new Error();
  } else {
    var collection = cb.Collection({
      collectionName: "toDoList",
    });
    collection.fetch(query, function (err, rows) {
      if (err) {
        throw new Error();
      } else {
        // do something with the collection rows
      }
    });
  }
}

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
