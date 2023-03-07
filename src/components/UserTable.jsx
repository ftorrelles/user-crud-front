import { Button, Table } from "react-bootstrap";
import { getUsersThunk, deleteUserThunk } from "../store/slices/users.slice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSelectedUser } from "../store/slices/selectedUser.slice";
import UserForms from "./userForms";

const UserTable = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsersThunk());
    }, []);

    const getInfo = (user) => {
        dispatch(setSelectedUser(user));
        handleShow();
    };

    const deleteUser = (user) => {
        dispatch(deleteUserThunk(user));
    };

    //Show form
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
                                <Button
                                    type="button"
                                    class="btn btn-outline-info"
                                    onClick={() => getInfo(user)}
                                >
                                    <i className="bx bx-edit-alt"></i>
                                </Button>
                            </td>
                            <td>
                                <Button
                                    type="button"
                                    class="btn btn-outline-danger"
                                    onClick={() => deleteUser(user)}
                                >
                                    <i className="bx bx-trash-alt"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <UserForms show={show} handleClose={handleClose} />
        </>
    );
};

export default UserTable;
