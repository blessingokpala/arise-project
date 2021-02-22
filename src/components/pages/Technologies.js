import React from 'react';
import ReactLogo from "../../reactjs.png";
import JavascriptLogo from "../../javascript.png";
import PythonimgLogo from "../../pythonimg.png";
import RailsLogo from "../../rails.png";
import CLangLogo from "../../clang.png";
import JavaLogo from "../../java.png";
import MongodbLogo from "../../mongodb.png";
import NodejsLogo from "../../nodejs.png";

function Technologies() {
  return (
<div id="technologies">
  <div className="container">
    <div className="tech-box"> 
        <div className="box-image">
          <img src={ReactLogo} alt="react img" />
        </div>
        <div className="contents">
        </div>
        </div>

        <div className="tech-box"> 
        <div className="box-image">
          <img src={JavaLogo} alt="java img" />
        </div>
        <div className="contents">
        </div>
        </div>

  <div className="tech-box"> 
  <div className="box-image">
    <img src={RailsLogo} alt="rails img" />
  </div>
  <div className="contents">
  </div>
  </div>

  <div className="tech-box"> 
        <div className="box-image">
          <img src={MongodbLogo} alt="mongodb img" />
        </div>
        <div className="contents">
        </div>
        </div>

  <div className="tech-box"> 
        <div className="box-image">
          <img src={JavascriptLogo} alt="javascript img" />
        </div>
        <div className="contents">
        </div>
        </div>

        <div className="tech-box"> 
        <div className="box-image">
          <img src={PythonimgLogo} alt="python img" />
        </div>
        <div className="contents">
        </div>
        </div>

        <div className="tech-box"> 
        <div className="box-image">
          <img src={CLangLogo} alt="c# img" />
        </div>
        <div className="contents">
        </div>
        </div>

        <div className="tech-box"> 
        <div className="box-image">
          <img src={NodejsLogo} alt="nodejs img" />
        </div>
        <div className="contents">
        </div>
        </div>

</div>
</div>
  )
}

export default Technologies
