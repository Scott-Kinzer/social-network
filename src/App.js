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
            <Route  path="/dialog" render={() => <Dialogs dataDialog={props.state.messagePage.DialogData} dataMes={props.state.messagePage.MessageData} />}/>
            <Route exact path="/" render={() => <Profile addPost={props.addPost} posts={props.state.profilePage.posts} text={props.state.profilePage.text} changeText={props.changeText}/>}/>
        </BrowserRouter>
    </div>

  );
}

export default App;
