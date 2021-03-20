import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginSuccess from "./components/login/LoginSuccess";
import TopPanel from "./components/panel/TopPanel";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <TopPanel />
      <div className="App effectSection wave">
        <Switch>
          {/* login page */}
          <Route exact path="/" component={Login} />
          {/* login success */}
          <Route path="/dev" component={LoginSuccess} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
