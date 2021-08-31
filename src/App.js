import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
