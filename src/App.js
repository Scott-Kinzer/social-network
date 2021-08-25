
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
        <BrowserRouter>
        <Header/>
        <Navbar/>
            <Route  path="/dialog" component={Dialogs}/>
            <Route exact path="/" component={Profile}/>
        </BrowserRouter>
    </div>

  );
}

export default App;
