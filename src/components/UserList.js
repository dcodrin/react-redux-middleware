import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class UserList extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;

        //Async handled by middleware
        dispatch(actions.startLoading());
        dispatch(actions.fetchUsers());

        //Async handled through dedicated action
        //dispatch(actions.startFetchUsers());
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.users.length > 0){
            const {dispatch} = this.props;
            dispatch(actions.stopLoading());
        }
    }

    renderUser(user) {
        return (
            <div key={user.name} className="card card-block">
                <h4 className="card-title">
                    Name: {user.name}
                </h4>
                <p className="card-text">
                    Email: {user.email}
                </p>
                <p className="card-text">
                    Phone: {user.phone}
                </p>
                <p className="card-text">
                    Website: {user.website}
                </p>
                <p className="card-text">
                    Company: {user.company.name}
                </p>
                <a className="btn btn-primary" href="#">
                    Email
                </a>
            </div>
        );
    }


    render() {
        console.log(this.props);
        return (
            <div className="user-list">
                {this.props.loading ? <div>Loading Data</div> : this.props.users.map(this.renderUser)}
            </div>
        );
    }
}


export default connect(({users, loading}) => {
    return {
        users,
        loading
    };
})(UserList);
