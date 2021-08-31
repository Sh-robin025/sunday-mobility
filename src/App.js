import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
