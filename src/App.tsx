import React, { useState, useEffect, useRef, MouseEvent } from "react";
//import { TopBackgroundImage } from "./topBackgroundImage";
import { ListItems } from "./listItems";
import { Form } from "./form";
import { ClearBlade } from "clearblade-js-client";

var cb = new ClearBlade();
var collectionContainer: Array<ItemToDo> = [];
var collectionVsContainerSize = { size: "equal" };
/*
function initCallback(err: boolean, authInfo: any) {
  // err is a boolean, authInfo is an object containing email and authToken
  if (err) {
    throw new Error();
  } else {
    console.log("successfully initated ClearBlade");
  }
}
*/

function fetchData() {
  console.log("In fetch");
  var collection = cb.Collection({
    collectionID: "e29ed5850caeb5bf99949ef0938b01",
  });
  collection.fetch((err, rows) => {
    if (err) {
      //throw new Error("Cannot find collection");
    } else {
      let i;
      for (i = 0; i < rows.length; i++) {
        let Eachitem: ItemToDo = JSON.parse(JSON.stringify(rows[i].data));
        collectionContainer = [...collectionContainer, Eachitem];
      }

      console.log("Got data");
      console.log(rows);

      console.log(collectionContainer);
    }
  });
}

function updateData() {
  var collection = cb.Collection({
    collectionID: "e29ed5850caeb5bf99949ef0938b01",
  });
  var modifyCallback = function () {
    console.log("Item Changed");
  };
  var removeCallback = function () {
    console.log("Item Removed");
  };

  if (collectionVsContainerSize.size === "greater") {
    let i;
    var queryNotInContainer = cb.Query({
      collectionID: "e29ed5850caeb5bf99949ef0938b01",
    });
    for (i = 0; i < collectionContainer.length; i++) {
      var queryInContainer = cb.Query({
        collectionID: "e29ed5850caeb5bf99949ef0938b01",
      });
      queryInContainer.equalTo("item_id", collectionContainer[i].item_id);
      var changes = { complete: collectionContainer[i].complete };
      collection.update(queryInContainer, changes, modifyCallback);

      queryNotInContainer.notEqualTo("item_id", collectionContainer[i].item_id);
    }
    collection.remove(queryNotInContainer, removeCallback);
  } else if (collectionVsContainerSize.size === "smaller") {
    let i;
    for (i = 0; i < collectionContainer.length; i++) {
      var queryInContainer = cb.Query({
        collectionID: "e29ed5850caeb5bf99949ef0938b01",
      });
      queryInContainer.equalTo("item_id", collectionContainer[i].item_id);
      var changes = { complete: collectionContainer[i].complete };
      collection.update(queryInContainer, changes, modifyCallback);
    }
    let NewItem = {
      item_id: collectionContainer[collectionContainer.length - 1].item_id,
      text: collectionContainer[collectionContainer.length - 1].text,
      complete: collectionContainer[collectionContainer.length - 1].complete,
    };
    collection.create(NewItem, removeCallback);
  } else {
    let i;
    for (i = 0; i < collectionContainer.length; i++) {
      var queryInContainer = cb.Query({
        collectionID: "e29ed5850caeb5bf99949ef0938b01",
      });
      var queryNotInContainer = cb.Query({
        collectionID: "e29ed5850caeb5bf99949ef0938b01",
      });
      queryInContainer.equalTo("item_id", collectionContainer[i].item_id);
      var changes = { complete: collectionContainer[i].complete };
      collection.update(queryInContainer, changes, modifyCallback);
    }
  }
}

const App: React.FC = () => {
  const [Container, setContainer] = useState<Array<ItemToDo>>([]);

  useEffect(() => {
    cb.init({
      URI: "https://platform.clearblade.com", // e.g., 'https://platform.clearblade.com'
      systemKey: "bec1b3850c8ed09188a3fbc4fcd301",
      systemSecret: "BEC1B3850C849DA9B9F9DCD7D27C",
      email: "sengchowtech@gmail.com", // use registerEmail instead if you wish to create a new user
      password: "Posb83604842!",
      callback: fetchData,
    });
    setTimeout(function () {
      setContainer(collectionContainer);
    }, 3000);
    console.log("added items");
  }, []);

  const isInitialMount = useRef(true);

  useEffect(
    function () {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        if (collectionContainer.length < Container.length) {
          collectionVsContainerSize.size = "smaller";
        } else if (collectionContainer.length > Container.length) {
          collectionVsContainerSize.size = "greater";
        } else {
          collectionVsContainerSize.size = "equal";
        }
        collectionContainer = Container;
        cb.init({
          URI: "https://platform.clearblade.com", // e.g., 'https://platform.clearblade.com'
          systemKey: "bec1b3850c8ed09188a3fbc4fcd301",
          systemSecret: "BEC1B3850C849DA9B9F9DCD7D27C",
          email: "sengchowtech@gmail.com", // use registerEmail instead if you wish to create a new user
          password: "Posb83604842!",
          callback: updateData,
        });
      }
    },
    [Container]
  );

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
      (item) => event.currentTarget.id !== item.item_id
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
