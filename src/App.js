
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
        <BrowserRouter>
        <Header/>
        <Navbar/>
            <Route  path="/dialog" render={() => <Dialogs dataDialog={props.dataDialog} dataMes={props.dataMes} />}/>
            <Route exact path="/" render={() => <Profile posts={props.posts}/>}/>
        </BrowserRouter>
    </div>

  );
}

export default App;
