import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

export const UserList = (props) => {
    let { users, handleDeleteUser } = props;
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {users && users.map(user =>
                    <Table.Row key={user.firstname + user.gender}>
                        <Table.Cell>{user.firstName}</Table.Cell>
                        <Table.Cell>{user.lastName}</Table.Cell>
                        <Table.Cell>{user.gender}</Table.Cell>
                        <Table.Cell>
                            <Button.Group basic size='small'>
                                <Button animated='vertical' onClick={() => { handleDeleteUser(user.firstName) }}>
                                    <Button.Content hidden>Delete</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='delete' />
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}
