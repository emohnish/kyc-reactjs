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
  Col,
  Row,
} from "react-bootstrap";

class RMTagging extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: "1",

      entity: [],
      relManagerName: [],
      rmSalesCode: [],
      lmName: [],
      accountType: [],

      selectedValues: {
        selectedEntity: "Entity A",
        selectedRelationshipManagerName: "Relationship Manager A",
        selectedRMSalesCode: "RM Sales Code A",
        selectedLMName: "LM Name A",
        selectedAccountType: "Account Type A",
      },
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.changeDrpdownValue = this.changeDrpdownValue.bind(this);
  }

  handleSelect(eventKey) {
    //alert(`selected ${eventKey}`);
    //console.log(`${eventKey}`);
    //this.setState({ activeKey: eventKey });
    this.setState({ activeKey: `${eventKey}` });
  }

  /*handleSave = (e) => {
    alert(e);
    console.log(e);
    //alert(event);
    //alert(event.target.value);
    //this.state.activeKey = eventKey;
    //alert(this.state.activeKey);
    //this.setState({ activeKey: event });
    //alert(this.getData(event));
  };*/

  handleSave(eventKey) {
    //alert(`selected ${eventKey}`);
    //console.log(`${eventKey}`);
    //this.setState({ activeKey: eventKey });
    //this.setState({ activeKey: `${eventKey}` });
    //console.log(this.state);
    //console.log(JSON.stringify(this.state.selectedValues, null, 2));
  }

  componentDidMount() {
    this.setState({
      entity: ["Entity A", "Entity B", "Entity C"],
      relManagerName: [
        "Relationship Manager A",
        "Relationship Manager B",
        "Relationship Manager C",
      ],
      rmSalesCode: ["RM Sales Code A", "RM Sales Code B", "RM Sales Code C"],
      lmName: ["LM Name A", "LM Name B", "LM Name C"],
      accountType: ["Account Type A", "Account Type B", "Account Type C"],
    });
  }

  changeDrpdownValue(event) {
    this.setState({
      selectedValues: {
        selectedEntity:
          event.target.name === "drpdownEntity"
            ? event.target.value
            : this.state.selectedValues.selectedEntity,
        selectedRelationshipManagerName:
          event.target.name === "drpdownRelManagerName"
            ? event.target.value
            : this.state.selectedValues.selectedRelationshipManagerName,
        selectedRMSalesCode:
          event.target.name === "drpdownRmSalesCode"
            ? event.target.value
            : this.state.selectedValues.selectedRMSalesCode,
        selectedLMName:
          event.target.name === "drpdownLMName"
            ? event.target.value
            : this.state.selectedValues.selectedLMName,
        selectedAccountType:
          event.target.name === "drpdownAccountType"
            ? event.target.value
            : this.state.selectedValues.selectedAccountType,
      },
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Nav
            variant="pills"
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Nav.Item>
              <Nav.Link eventKey="1" href="/rm-tagging">
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
          <Switch></Switch>
        </Router>
        <h4>RM Mapping to Client</h4>
        <div className="card">
          <div className="card-body">
            <Form>
              <Form.Row>
                <Col md={3}>
                  <Form.Label>Entity</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control
                    as="select"
                    name="drpdownEntity"
                    onChange={this.changeDrpdownValue}
                  >
                    {this.state.entity.map((e, key) => {
                      return <option key={key}>{e}</option>;
                    })}
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="mt-2">
                <Col md={3}>
                  <Form.Label>Relationship Manager Name</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control
                    as="select"
                    name="drpdownRelManagerName"
                    onChange={this.changeDrpdownValue}
                  >
                    {this.state.relManagerName.map((e, key) => {
                      return <option key={key}>{e}</option>;
                    })}
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="mt-2">
                <Col md={3}>
                  <Form.Label>RM Sales Code</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control
                    as="select"
                    name="drpdownRmSalesCode"
                    onChange={this.changeDrpdownValue}
                  >
                    {this.state.rmSalesCode.map((e, key) => {
                      return <option key={key}>{e}</option>;
                    })}
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="mt-2">
                <Col md={3}>
                  <Form.Label>LM Name</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control
                    as="select"
                    name="drpdownLMName"
                    onChange={this.changeDrpdownValue}
                  >
                    {this.state.lmName.map((e, key) => {
                      return <option key={key}>{e}</option>;
                    })}
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row className="mt-2">
                <Col md={3}>
                  <Form.Label>Account Type</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control
                    as="select"
                    name="drpdownAccountType"
                    onChange={this.changeDrpdownValue}
                  >
                    {this.state.accountType.map((e, key) => {
                      return <option key={key}>{e}</option>;
                    })}
                  </Form.Control>
                </Col>
              </Form.Row>
              <p className="text-right mt-2">
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  onClick={this.handleSave}
                >
                  Save
                </button>
                <button type="button" className="btn btn-secondary">
                  Next
                </button>
              </p>

              <code>{JSON.stringify(this.state.selectedValues, null, 2)}</code>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default RMTagging;
