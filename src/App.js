import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersC";
import WeatherContainer from "./components/Weather/Weather";
import HeaderContainer from "./components/Header/Header";



function App() {
  return (
    <div className="app-wrapper">
        <BrowserRouter>
        <HeaderContainer/>
        <Navbar/>
            <Route  path="/dialog" render={() => <DialogsContainer  />}/>
            <Route  path="/profile/:userID?" render={() => <ProfileContainer />}/>
            <Route exact path="/users" render={() => <UsersContainer />}/>
            <Route exact path="/weather" render={() => <WeatherContainer />}/>

        </BrowserRouter>
    </div>

  );
}

export default App;
