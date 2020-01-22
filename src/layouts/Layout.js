import React from "react";
import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div>
      <Header />

      <div className="jumbotron">
        {props.children}
        <button className="btn btn-outline-danger">Read More</button>
      </div>
    </div>
  );
}
