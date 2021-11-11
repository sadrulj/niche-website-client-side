import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Products from "./components/Home/Products/Products/Products";
import Blogs from "./components/Home/Review/Reviews/Reviews";
import Login from "./components/Shared/Login/Login";
import SignUp from "./components/Shared/SignUp/SignUp";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./components/Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Home/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/products">
              <Products />
            </PrivateRoute>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
