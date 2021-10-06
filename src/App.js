import CurrentInfo from './Dates/CurrentInfo';
import Todo from './Todo/Todo';
import AddButton from './Add/AddButton';
import AddTick from './Add/AddTick';
import AddTask from './Add/AddTask';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className = "main">
      <div className="heading">all tasks</div>
      <CurrentInfo />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Todo />
            <AddButton />
          </Route>
          <Route exact path="/add">
            <AddTask />
            <AddTick />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <h1>Hello World!! 🚀🚀</h1>  */}
    </div>
  );
}

export default App;
