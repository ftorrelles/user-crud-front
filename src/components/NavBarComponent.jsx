import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import UserForms from "./userForms";

const NavBarComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Users CRUD</Navbar.Brand>
                    <Button onClick={handleShow}>
                        Create user <i className="bx bxs-user-detail"></i>
                    </Button>
                </Container>
            </Navbar>
            <UserForms show={show} handleClose={handleClose} />
        </>
    );
};

export default NavBarComponent;
