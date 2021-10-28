import React from "react";
import './Header.css'
import facebook from '../../img/facebook.png';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {AuthCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me" , {
            withCredentials: true
        })
            .then(data => {
                console.log(data.data.data)
                this.props.AuthCreator(data.data.data.id,data.data.data.email,data.data.data.login)
            })
    }

    render() {


        return <Header dataCoockie={this.props.Auth} />
    }
}



const Header = (props) => {
    return (
        <header className="header">
            <img className="logo" src={facebook} alt=""/>
            <NavLink to="/login">
                <div className="login">LOGIN</div>
            </NavLink>
            {props.dataCoockie ? <div className="cookieField">{props.dataCoockie.login}</div> : <div>No cockie</div>}


        </header>
    )
}
let mapStateToProps = (state) => {
    return {
        Auth: state.auth
    }

}

export default connect(mapStateToProps, {AuthCreator})(HeaderContainer)
