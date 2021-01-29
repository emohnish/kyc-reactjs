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

class KYCWriteup extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: "2",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    //alert(`selected ${eventKey}`);
    //console.log(`${eventKey}`);
    this.setState({ activeKey: `${eventKey}` });
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
        <h4>KYC Writeup</h4>
        <div className="card">
          <div className="card-body">
            <form>
              <h5>Client Particulars</h5>
              <div className="alert alert-secondary">
                <div className="form-group row">
                  <label
                    for="textboxGivenName"
                    className="col-md-2 col-form-label"
                  >
                    Given Name
                  </label>
                  <div className="col-md-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      ng-model="kycwriteup.givenName"
                    />
                  </div>
                  <label
                    for="textboxSurname"
                    className="col-md-2 col-form-label"
                  >
                    Surname
                  </label>
                  <div className="col-md-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      ng-model="kycwriteup.surName"
                    />
                  </div>
                  <label for="textboxDOB" className="col-md-2 col-form-label">
                    DOB
                  </label>
                  <div className="col-md-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      ng-model="kycwriteup.dob"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="dropdownNationality"
                    className="col-md-2 col-form-label"
                  >
                    Nationality
                  </label>
                  <div className="col-md-2">
                    <select
                      className="form-control"
                      ng-init="kycwriteup.nationality = kycwriteup.nationality || countryList[0]"
                      ng-model="kycwriteup.nationality"
                      ng-options="x for x in countryList"
                    ></select>
                  </div>
                  <label
                    for="dropdownCountryOfDomicile"
                    className="col-md-4 col-form-label"
                  >
                    Country of Domicile
                  </label>
                  <div className="col-md-4">
                    <select
                      className="form-control"
                      ng-init="kycwriteup.countryOfDomicile = kycwriteup.countryOfDomicile || countryList[0]"
                      ng-model="kycwriteup.countryOfDomicile"
                      ng-options="x for x in countryList"
                    ></select>
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="dropdownTaxResidence"
                    className="col-md-2 col-form-label"
                  >
                    Tax Residence
                  </label>
                  <div className="col-md-2">
                    <select
                      className="form-control"
                      ng-init="kycwriteup.taxResidence = kycwriteup.taxResidence || countryList[0]"
                      ng-model="kycwriteup.taxResidence"
                      ng-options="x for x in countryList"
                    ></select>
                  </div>
                  <div className="col-md-8"></div>
                </div>
              </div>

              <h5>Client Identification</h5>
              <div className="alert alert-secondary">
                <div className="form-group row">
                  <label
                    for="dropdownIdentificationType"
                    className="col-md-3 col-form-label"
                  >
                    Identification Type
                  </label>
                  <div className="col-md-3">
                    <select
                      className="form-control"
                      ng-init="kycwriteup.identificationType = kycwriteup.identificationType || countryList[0]"
                      ng-model="kycwriteup.identificationType"
                      ng-options="x for x in countryList"
                    ></select>
                  </div>
                  <label
                    for="textboxIdentificationNo"
                    className="col-md-3 col-form-label"
                  >
                    Identification No.
                  </label>
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      ng-model="kycwriteup.identificationNo"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="dropdownIssueCountry"
                    className="col-md-2 col-form-label"
                  >
                    Issue Country
                  </label>
                  <div className="col-md-2">
                    <select
                      className="form-control"
                      ng-init="kycwriteup.issueCountry = kycwriteup.issueCountry || countryList[0]"
                      ng-model="kycwriteup.issueCountry"
                      ng-options="x for x in countryList"
                    ></select>
                  </div>
                  <label
                    for="textboxIssueDate"
                    className="col-md-2 col-form-label"
                  >
                    Issue Date
                  </label>
                  <div className="col-md-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      ng-model="kycwriteup.issueDate"
                    />
                  </div>

                  <label
                    for="textboxValidTill"
                    className="col-md-2 col-form-label"
                  >
                    Valid Till
                  </label>
                  <div className="col-md-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      ng-model="kycwriteup.validTill"
                    />
                  </div>
                </div>
              </div>

              <p className="text-right">
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  ng-click="kycWriteupPrevious()"
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  ng-click="kycWriteupSaveAsDraft()"
                >
                  Save As Draft
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  ng-click="kycWriteupSaveAndNext()"
                >
                  Save And Next
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default KYCWriteup;
