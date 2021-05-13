import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, MyGroups, CreateGroup, GroupView, MyList, OtherList } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/mygroups" exact component={() => <MyGroups />} />
          <Route path="/creategroup" exact component={() => <CreateGroup />} />
          <Route path="/groupview" exact component={() => <GroupView />} />
          <Route path="/mylist" exact component={() => <MyList />} />
          <Route path="/otherlist" exact component={() => <OtherList />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;