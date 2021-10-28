import React from 'react';
import "./Users.css";
// import axios from "axios";
import {
    fetchFuncTrue,
    follow,
    setCurrentPage,
    setUsers,
    SetTotalUsersCountF,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
class UsersAPI  extends React.Component{
    componentDidMount() {
        fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                if (response.ok) {
                    this.props.fetchFuncTrue(false)
                    return response.json()

                } else {
                    return []
                }

            }).then(data => {
                this.props.setUsers(data.items)
                this.props.SetTotalUsersCountF(20)
        })
    }

    getDataServerOnClick = (currentNum) => {
        // this.props.setCurrentPage(currentNum)
        fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNum}&count=${this.props.pageSize}`)
            .then(data => {
                return data.json()
            }).then(data => this.props.setUsers(data.items))
    }


    render () {

        return (
             <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    getDataServerOnClick={this.getDataServerOnClick}
                    userAccounts={this.props.userAccounts}
                    unfolow={this.props.unfollow}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching}
                />
        )

    }
}


const Users = (props) =>{

    let countOfPage = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= countOfPage; i++) {
        pages.push(i);
    }
    return (
        <div className="content">

            <div>
                {pages.map(i => {
                    return(
                        <button onClick={() => props.getDataServerOnClick(i)}>{i}</button>)
                })}
            </div>
            <ul >
                {props.isFetching ? <Preloader /> : props.userAccounts.map(item => {
                    return (
                        <>
                        <NavLink to={`/profile/${item.id}`}>
                            <li className="users-item">
                                <div>
                                    {item.photos.small ? <img src="" alt=""/>: <img src="https://media.vlpt.us/images/hustle-dev/post/9b4d5fd6-81b1-4d22-8817-16b61f610e9a/img.jpeg" alt=""/>}
                                </div>
                                <div className="info-container">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        {item.location}
                                    </div>
                                    <button onClick={() => item.followed ? props.unfollow(item.id) : props.follow(item.id)}>
                                        {item.followed ? "UNFOLLOW" : "FOLLOW"}
                                    </button>
                                </div>
                            </li>
                        </NavLink>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}


let mapStateToProps = (state)  => {
    return {
        userAccounts: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    SetTotalUsersCountF,
    fetchFuncTrue
})(UsersAPI)

export default UsersContainer