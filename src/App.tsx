import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import CustomAlert from "./common/Alert/Alert";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./pages/Signup/Signup";
import AppRoute from "./routes/Approuter";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomAlert />
        <Navbar />
        <AppRoute />
      </div>
    </Provider>
  );
}

export default App;
