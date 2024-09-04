import React from "react";
import "./styling.css";

class Banner extends React.Component {
  render() {
    return (
      <header>
        <h1>Orbit Report</h1>
        <p>Click on the buttons to see the satellites in that orbit type</p>
      </header>
    );
  }
}

export default Banner;
