import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" />
        <Home />
        <Route path="/tv" />
        <Tv />
        <Route path="/search" />
        <Search />
      </Switch>
    </Router>
  );
}

export default App;
