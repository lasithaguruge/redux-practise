import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import UserForm from './UserForm';
import { UserList } from './UserList';

class UserDataContainer extends Component {

    handleSubmit = (data) => {
        this.props.addUser(data);
        console.log("PROPS ", this.props)
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
                        <UserList users={this.props.users} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (data) => {
            dispatch({
                type: 'ADD',
                payload: data
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);