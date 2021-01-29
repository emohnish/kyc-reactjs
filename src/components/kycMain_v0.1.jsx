import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import RMTagging from "./rmTagging";
import KYCWriteup from "./kycWriteup";
/*
class KYCMain extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">RM Tagging</Nav.Link>
                    <Nav.Link href="/kyc-writup">KYC Writeup</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <RMTagging />
                </Route>
                <Route path="/kyc-writup">
                  <KYCWriteup />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
*/

class KYCMain_v01 extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Nav
                variant="tabs"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
              >
                <Nav.Item>
                  <Nav.Link eventKey="1" href="/">
                    RM Tagging
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" href="/kyc-writeup">
                    KYC Writeup
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <br />
              <Switch>
                <Route exact path="/">
                  <RMTagging />
                </Route>
                <Route path="/kyc-writeup">
                  <KYCWriteup />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }

  /*NavDropdownExample(eventKey) {
    const handleSelect = (eventKey) => alert("selected ${eventKey}");
  }*/

  handleSelect(eventKey) {
    //alert(`selected ${eventKey}`);
    //console.log(`${eventKey}`);
    this.setState({ activeKey: "2" });
  }
}

export default KYCMain_v01;
