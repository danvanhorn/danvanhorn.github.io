import React, { Component } from "react";
import Styled from "../../utils/styled";
import {
  ContentTitle,
  ContentSection
} from "../../style/js/styledComponents.js";

const JobTitle = Styled("div", {
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#2B5D7F"
});

const UTitle = Styled("h2", {
  textAlign: "left",
  width: "100%",
  color: "#2B5D7F",
  borderBottom: "1px solid #4CB7FF"
});

const BulletedList = Styled("ul", {
  listStyle: "none",
  paddingLeft: "10px",
  margin: "0"
});

const ListItem = Styled("li", {
  padding: "4px 0px 4px 0px"
});

const ListBold = Styled("strong", {
  color: "#2B5D7F"
});

class ResumeContent extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <div className="content-section button-container">
          <a id="download" href="../content/danvanhornresume.pdf">Download</a>
        </div>
        <div className="content-section">
          <UTitle>Education</UTitle>
          <div className="resume-title">
            <h3>Oregon State University, Corvallis OR</h3>
            <strong>September 2015 - est. June 2019</strong>
          </div>
          <p>B.S. Computer Science, Computer Systems</p>
          <div className="resume-title">
            <h3>Chemeketa Community College, Mcminnville OR</h3>
            <strong>September 2013 - June 2014</strong>
          </div>
          <p>Associates Degree</p>
        </div>
        <div className="content-section">
          <UTitle>Technical Skills</UTitle>
          <div className="skills-section">
            <div style={{padding: '3px'}}>
              <h3>Programming</h3>
              <p><strong>C#, C++, C, JavaScript</strong>, HTML, CSS, LESS, JSON, XML, YAML, SQL, MySql, Node JS, Python, Java</p>
            </div>
            <div style={{padding: '3px'}}>
              <h3>Technologies</h3>
              <p><strong>React Js, Typescript, NPM, Redux, Flux, Webpack, Babel</strong>, JQuery, Bootstrap, Razor, XSLT</p>
            </div>
          </div>
        </div>
        <div className="content-section">
          <UTitle>Experience</UTitle>
          <JobTitle>
            <h3>Center For Applied Systems and Software</h3>&nbsp;
            <strong>Software Developer, May 2016 - Present</strong>
          </JobTitle>
          <BulletedList>
            <ListItem><ListBold>Smarter Balanced:</ListBold>&nbsp; Suite of scalable, open source .NET core and Node microservice and web applications with a shared component library in React and Typescript for the Smarter Balanced Assessment Consortium, serving 4700 state agencies, teachers, parents and students. Minimized repeated code and allowed for thorough automated testing, continuous integration and deployment using Docker and AWS. Increased code coverage from 0 to 80% and introduced a consistent development workflow upon joining the team.</ListItem>
            <ListItem><ListBold>Oregon Department of Transportation:</ListBold>&nbsp; Collaborated with a team to develop and maintain RESTful web services, MVC web applications in C#, interconnected SQL databases, and desktop applications. The applications we created allowed users to edit and dynamically render data-driven graphics and live events from the entire state of Oregon.</ListItem>
            <ListItem><ListBold>Responsibilities:</ListBold>&nbsp; Adapt to rapidly changing project specifications and synthesize new technologies. Attend weekly sprint planning, daily standups, and excel in an AGILE team environment with deadlines. Mentor teammates in UI, API, and Dev Ops implementation and design.</ListItem>
          </BulletedList>
          <JobTitle>
            <h3>CDK Global</h3>&nbsp;
            <strong>Software Engineer Intern, June 2017 - September 2017</strong>
          </JobTitle>
          <BulletedList>
            <ListItem><ListBold>Customer Search Interface:</ListBold>&nbsp; Designed and implemented a responsive, mobile-first UI in React and Redux for a search system that serves over 27,000 retail locations in 100 countries. Instituted a workflow for developers to follow; automated testing, building, and deployment to NPM. Adhered to test driven development which resulted in 97% code coverage and far less bugs in development.</ListItem>
            <ListItem><ListBold>Cloud Search:</ListBold>&nbsp; Member of winning team in the 2017 CDK Global Hackathon. Developed a cloud service and search API in .NET core hosted in AWS for indexing the entire customer database. Built a user input auto-completion UI in React. Improved search speeds by a factor of 50; estimated to save the company over $8 million a year in development costs.            </ListItem>
            <ListItem><ListBold>Responsibilities:</ListBold>&nbsp; Consistently met goals and deadlines in a rapid SCRUM environment; held daily standup meetings and weekly project showcases with upper management.
            </ListItem>
          </BulletedList>
          <JobTitle>
            <h3>OSU School of Electrical Engineering And Computer Science</h3>&nbsp;
            <strong>Teaching Assistant, September 2016 - June 2017</strong>
          </JobTitle>
          <BulletedList>
            <ListItem><ListBold>Recitations:</ListBold>&nbsp;
            Facilitated weekly lecture sessions to strengthen the fundamental skills of students in UNIX, Python, C++ and object oriented programming. Early introduction to data structures and common paradigms of software engineering.
            </ListItem>
            <ListItem><ListBold>Laboratories:</ListBold>&nbsp;
            Provided tutoring services regarding design, programming and debugging issues students face both in face-to-face and remote sessions.
            </ListItem>
            <ListItem><ListBold>Team Collaboration:</ListBold>&nbsp;
            Worked in conjunction with faculty to conceptualize new curriculum and assignments.
            </ListItem>
          </BulletedList>
        </div>
      </div>
    );
  }
}

export default ResumeContent;
