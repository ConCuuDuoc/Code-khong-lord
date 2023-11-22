import React from "react";
import "./Overview.css";
import Button from 'react-bootstrap/Button';
import LeftBar from "../../Components/LeftBar/Leftbar"; 

const Overview = () => {

  return (
    <div className="overview-of-course">
      <LeftBar /> 
      <img className="toggle-icon" alt="" src="/toggle.svg" />
      <div className="resources">Overview</div>
      <div className="resources2">{`Cyber Security -> Developing Secure Software`}</div>
      <div className="course-details-software-container">
        <p className="course-details">{`Course details: `}</p>
        <p className="course-details">&nbsp;</p>
        <p className="course-details-1">

          Software developers are constantly told to use secure coding
          practices. Luckily, with today's tools, secure code doesn't take a lot
          of time or effort. There are security frameworks (authentication,
          authorization, etc.) developers can use as their own. There are also
          static and dynamic code analysis tools to test code. Plus, with
          security patterns that can be implemented at the design level—before
          coding ever begins—you can make sure you're not reinventing the wheel.

        </p>

        <p className="course-details">Learning objectives:</p>
        <p className="course-details">&nbsp;</p>
        <ul className="what-is-software-security-ana">
          <li className="what-is-software">What is software security?</li>
          <li className="what-is-software">
            Analyzing different kinds of security threats
          </li>
          <li className="what-is-software">
            Designing secure software by adopting patterns and addressing
            vulnerabilities
          </li>
          <li className="what-is-software">Avoiding buffer overflows</li>
          <li className="what-is-software">
            Countering insecure direct object references
          </li>
          <li className="what-is-software">Securing sensitive data</li>
          <li className="what-is-software">Testing software security</li>
        </ul>
        <p className="course-details">&nbsp;</p>
      </div>
     
         <Button className="button-base">
            <div className="text-2">Join</div>
        </Button>     
    </div>
  );
};

export default Overview;
