import React from 'react'
import { Table } from 'semantic-ui-react'

export const UserList = (props) => {
    let { users } = props;
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {users && users.map(user =>
                    <Table.Row key={user.name + user.gender}>
                        <Table.Cell>{user.firstName}</Table.Cell>
                        <Table.Cell>{user.lastName}</Table.Cell>
                        <Table.Cell>{user.gender}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}
