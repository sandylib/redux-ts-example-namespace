import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Toast from 'react-bootstrap/Toast';
import './styles.scss';

export default function BootstrapDemo() {
  return (
    <>
      <div className="componentExample">
        <p className="componentLabel">Component: Alert</p>
        <Alert variant="primary">This is a primary alert—check it out!</Alert>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Accordion</p>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I&apos;m the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I&apos;m another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: h1</p>
        <h1>
          Example heading <Badge variant="secondary">New</Badge>
        </h1>
        <h2>
          Example heading <Badge variant="secondary">New</Badge>
        </h2>
        <h3>
          Example heading <Badge variant="secondary">New</Badge>
        </h3>
        <h4>
          Example heading <Badge variant="secondary">New</Badge>
        </h4>
        <h5>
          Example heading <Badge variant="secondary">New</Badge>
        </h5>
        <h6>
          Example heading <Badge variant="secondary">New</Badge>
        </h6>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Breadcrumb</p>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Button</p>
        <Button variant="primary">Primary</Button>&nbsp;
        <Button variant="secondary">Secondary</Button>&nbsp;
        <Button variant="success">Success</Button>&nbsp;
        <Button variant="warning">Warning</Button>&nbsp;
        <Button variant="danger">Danger</Button>&nbsp;
        <Button variant="info">Info</Button>&nbsp;
        <Button variant="light">Light</Button>&nbsp;
        <Button variant="dark">Dark</Button>&nbsp;
        <Button variant="link">Link</Button>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: ButtonGroup</p>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Card</p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Dropdown</p>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Form</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: InputGroup</p>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <label htmlFor="basic-url">Your vanity URL</label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>With textarea</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: ListGroup</p>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Nav</p>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Navbar</p>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Pagination</p>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Spinner</p>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Table</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Tabs</p>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            If my dear love were but the child of state, It might for
            Fortune&apos;s bastard be unfather&apos;d, As subject to Time&apos;s
            love or to Time&apos;s hate, Weeds among weeds, or flowers with
            flowers gather&apos;d. No, it was builded far from accident; It
            suffers not in smiling pomp, nor falls Under the blow of thralled
            discontent, Whereto th&apos; inviting time our fashion calls: It
            fears not policy, that heretic, Which works on leases of
            short-number&apos;d hours,
          </Tab>
          <Tab eventKey="profile" title="Profile">
            If my dear love were but the child of state, It might for
            Fortune&apos;s bastard be unfather&apos;d, As subject to Time&apos;s
            love or to Time&apos;s hate, Weeds among weeds, or flowers with
            flowers gather&apos;d. No, it was builded far from accident; It
            suffers not in smiling pomp, nor falls Under the blow of thralled
            discontent, Whereto th&apos; inviting time our fashion calls: It
            fears not policy, that heretic, Which works on leases of
            short-number&apos;d hours,
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            If my dear love were but the child of state, It might for
            Fortune&apos;s bastard be unfather&apos;d, As subject to Time&apos;s
            love or to Time&apos;s hate, Weeds among weeds, or flowers with
            flowers gather&apos;d. No, it was builded far from accident; It
            suffers not in smiling pomp, nor falls Under the blow of thralled
            discontent, Whereto th&apos; inviting time our fashion calls: It
            fears not policy, that heretic, Which works on leases of
            short-number&apos;d hours,
          </Tab>
        </Tabs>
      </div>

      <div className="componentExample">
        <p className="componentLabel">Component: Toast</p>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
