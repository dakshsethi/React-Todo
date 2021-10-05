import CurrentInfo from './Dates/CurrentInfo';
import Todo from './Todo/Todo';
import AddButton from './Add/AddButton';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const App = () => {
  return (
    <div className = "main">
      <div className="heading">all tasks</div>
      <CurrentInfo />
      <Router history={ history }>
        <Switch>
          <Route exact path="/" component={Todo} />
          {/* <Route path="/add" component={Profile} /> */}
          {/* <Route path="/followers" component={Followers} />
          <Route path="/following" component={Following} /> */}
        </Switch>
      </Router>
      <AddButton />
      {/* <h1>Hello World!! 🚀🚀</h1>  */}
    </div>
  );
}

export default App;