import "./App.css";
import UserTable from "./components/UserTable";
import { Container } from "react-bootstrap";
import NavBarComponent from "./components/NavBarComponent";

function App() {
    return (
        <div className="App">
            <NavBarComponent />
            <Container className="my-4">
                <UserTable />
            </Container>
        </div>
    );
}

export default App;
