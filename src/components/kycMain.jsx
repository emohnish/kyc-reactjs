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
import AccountOnboarding from "./accountOnboarding";
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

class KYCMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "link-1",
    };
    //this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect1(eventKey) {
    //alert(this.props.eventKey);
    //alert(`selected ${eventKey}`);
    //console.log(`${eventKey}`);
    //this.setState({ activeKey: "link-3" });
    //alert(this.state.activeKey);
  }

  handleSelect = (event) => {
    //alert(event);
    //alert(event.target.value);
    //this.state.activeKey = eventKey;
    //alert(this.state.activeKey);
    //this.setState({ activeKey: event });
    //alert(this.getData(event));
    /*this.setState({ activeKey: event }, function () {
      alert(this.state.activeKey);
      console.log(this.state.activeKey);
    });*/
  };

  render() {
    return (
      <div>
        <form>
          <div className="row">
            <Router>
              <div className="col-md-2">
                <Nav
                  defaultActiveKey="link-1"
                  className="flex-column"
                  variant="pills"
                  activeKey={this.state.activeKey}
                  //onSelect={this.handleSelect}
                >
                  <Nav.Link href="/home" eventKey="link-0">
                    Home / My Requests
                  </Nav.Link>
                  <Nav.Link eventKey="link-1" href="/rm-tagging">
                    Account Onboarding
                  </Nav.Link>
                  <Nav.Link eventKey="link-2" href="/rolling-review">
                    Rolling Review
                  </Nav.Link>
                  <Nav.Link eventKey="link-3" href="/help">
                    Help
                  </Nav.Link>
                </Nav>
              </div>

              <div className="col-md-10">
                <Switch>
                  <Route path="/home">
                    <div>
                      <h2>TBD</h2>
                    </div>
                  </Route>
                  <Route path="/rm-tagging">
                    <RMTagging />
                  </Route>
                  <Route path="/kyc-writeup">
                    <KYCWriteup />
                  </Route>
                  <Route path="/rolling-review">
                    <h2>TBD</h2>
                  </Route>
                  <Route path="/help">
                    <h2>TBD</h2>
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        </form>
      </div>
    );
  }

  /*NavDropdownExample(eventKey) {
    const handleSelect = (eventKey) => alert("selected ${eventKey}");
  }*/
}

export default KYCMain;
