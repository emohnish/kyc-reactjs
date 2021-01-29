import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/counter";
import RMTagging from "./components/rmTagging";
import KYCWriteup from "./components/kycWriteup";

import AccountOnboarding from "./components/accountOnboarding";

import KYCMain from "./components/kycMain";

import "bootstrap/dist/css/bootstrap.css";

const element = <h1>Hello World</h1>;
//alert(element);

//console.log(element);

const element1 = (
  <div>
    <h1>Hello World</h1>
    <button className="btn btn-primary">Increment</button>
  </div>
);

//ReactDOM.render(element1, document.getElementById('root'))

//ReactDOM.render(<Counter />, document.getElementById("root"));

/*
ReactDOM.render(
  <div>
    <AccountOnboarding />
    <RMTagging />
    <br />
    <KYCWriteup />
  </div>,
  document.getElementById("root")
);
*/

ReactDOM.render(
  <div>
    <KYCMain />
  </div>,
  document.getElementById("root")
);

//ReactDOM.render(<KYCWriteup />, document.getElementById("kycWriteupTab"));
