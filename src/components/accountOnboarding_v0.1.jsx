import React, { Component } from "react";

class AccountOnboarding_v01 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <img src="" className="rounded float-left" alt="Banner here..." />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-3 sidenav bg-light text-white">
            <ul className="nav nav-pills flex-column nav-fill">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#">
                  Home / My Requests
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#!rmTagging"
                >
                  Account Onboarding
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#">
                  Rolling Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-pills nav-justified nav-fill" id="myTab">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#!rmTagging"
                    >
                      RM Tagging
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#!kycwriteup"
                    >
                      KYC Writeup
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#!riskAssessment"
                    >
                      Risk Assessment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#!documentUpload"
                    >
                      Document Upload
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#!submit">
                      Submit
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-12">
                <div ng-view></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountOnboarding_v01;
