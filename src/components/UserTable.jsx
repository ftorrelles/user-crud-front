import { Button, Table } from "react-bootstrap";
import { getUsersThunk } from "../store/slices/users.slice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSelectedUser } from "../store/slices/selectedUser.slice";

const UserTable = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const c = useSelector((state) => state.selectedUser);
    console.log(c);
    useEffect(() => {
        dispatch(getUsersThunk());
    }, []);

    const getInfo = (user) => {
        dispatch(setSelectedUser(user));
    };
    console.log(users);
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Birthday</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.birthday}</td>
                        <td>
                            <Button onClick={() => getInfo(user)}>
                                <i className="bx bx-edit-alt"></i>
                            </Button>
                        </td>
                        <td>
                            <Button>
                                <i className="bx bx-trash-alt"></i>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default UserTable;
