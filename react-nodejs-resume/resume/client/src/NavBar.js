import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Resume from './Resume';
import AboutMe from './AboutMe';

function Menu() {
    return(
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
       <Nav.Link href="/Resume" onClick={Resume}>Resume</Nav.Link>
       <Nav.Link href="/AboutMe" onClick={AboutMe}>About me</Nav.Link>
    </Nav>
     <Form inline>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-success">Search</Button>
     </Form>
    </Navbar.Collapse>
    </Navbar>
    );
}

export default Menu;