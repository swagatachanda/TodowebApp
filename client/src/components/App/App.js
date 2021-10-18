import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Page from "../screens/Profile/profile";
import Profile from "../screens/Login/login";
import Footer from "../screens/Footer/footer";

class App extends React.Component {
  render() {
    var router;
    const skip = () => {
      if (new Date(Date.now()) >= new Date(localStorage.getItem("expiry"))) {
        localStorage.setItem("logged", false);
        localStorage.removeItem("data");
      }

      if (
        localStorage.getItem("data") == null ||
        !localStorage.getItem("logged")
      ) {
        localStorage.removeItem("logged");
        localStorage.removeItem("data");
        localStorage.removeItem("expiry");
        localStorage.removeItem("url");
        return <Profile />;
      } else {
        return <Page />;
      }
    };
    router = skip();

    return (
      // <div className='App_'>
      <div style={{ marginTop: "120px" }}>
        <div className="App__Aside" style={{ height: "100%" }}>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                {router}
              </Route>
              <Route path="/mypage">{router}</Route>
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
