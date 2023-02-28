import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUsersThunk, updateUserThunk } from "../store/slices/users.slice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UserForms = ({ show, handleClose }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const userSelected = useSelector((state) => state.selectedUser);
    console.log(userSelected);

    const submit = (data) => {
        console.log(data);
        if (userSelected) {
            dispatch(updateUserThunk(data));
        } else {
            dispatch(createUsersThunk(data));
            reset(resetForm);
        }
    };

    useEffect(() => {
        userSelected ? reset(userSelected) : reset(resetForm);
    }, [userSelected]);

    const resetForm = () => {
        return {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
        };
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Firt name</Form.Label>
                                    <Form.Control
                                        placeholder="First name"
                                        {...register("first_name", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        placeholder="Last name"
                                        {...register("last_name", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register("email", { required: true })}
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="birthday"
                                        {...register("birthday", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <hr />
                        <br />
                        <Row>
                            <Col
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {" "}
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                            </Col>
                            <Col
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={handleClose}
                                >
                                    Save user
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default UserForms;
