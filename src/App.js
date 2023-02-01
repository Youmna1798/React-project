import "./App.css";
import MoviesDetails from "./pages/Movies";
import Favorites from "./pages/Favorites";
import AddUser from "./pages/AddUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import "./loginForm.css";
import watchMovie from "./pages/watchMovie";
import { LangContext } from "./context/LangContext";
import { useState } from "react";

function App() {
  const [lang,setLang] = useState('en')
  return (
    <LangContext.Provider value={{lang,setLang}}>
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path={"/"} exact component={MoviesDetails} />
          <Route
            path={"/Movies"}
            exact
            component={MoviesDetails}
          />
          <Route path={"/favorites"} component={Favorites} />
          <Route path={"/add-user"} exact component={AddUser} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/watchMovie/:id"} exact component={watchMovie} />
        </Switch>
      </div>
    </BrowserRouter>
    </LangContext.Provider>
  );
}

export default App;
