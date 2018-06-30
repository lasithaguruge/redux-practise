import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import UserForm from './UserForm';
import { UserList } from './UserList';
import { addUser, deleteUser } from '../actions/userActions';

class UserDataContainer extends Component {

    handleSubmit = (data) => {
        this.props.addUser(data);
    }

    handleDeleteUser = (name) => {
        this.props.deleteUser(name);
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <UserForm handleSubmit={this.handleSubmit}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <UserList 
                            users={this.props.users} 
                            handleDeleteUser={this.handleDeleteUser}
                            handleGetUser={this.handleGetUser} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (data) => {
            dispatch(addUser(data));
        },
        deleteUser: (name) => {
            dispatch(deleteUser(name))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);