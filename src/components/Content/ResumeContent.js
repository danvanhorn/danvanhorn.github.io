import React, { Component } from 'react';
import Styled from '../../utils/styled';
import { ContentTitle, ContentSection } from '../../style/js/styledComponents.js';

const JobTitle = Styled('div', {
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#2B5D7F'
})

const UTitle = Styled('h2', {
  textAlign: 'left',
  width: '100%',
  color: '#2B5D7F',
  borderBottom: '1px solid #4CB7FF'
})

const BulletedList = Styled('ul', {
  listStyle: 'none',
  padding: '0',
  margin: '0'
});

class ResumeContent extends Component {
  render() {
    return (
      <div className="content-wrapper">
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
            <li>Collaborate with team members in an to develop and maintain applications for a government system using AGILE practices.</li>
            <li>Update outdated technologies and design methodologies using modern practices.</li>
            <li>Develop RESTful geospatial services to supply dynamic information to web applications using MVC pattern and ArcGIS API.</li>
            <li>Adapt at dynamic project specifications and full stack full stack development.</li>
          </BulletedList>
          <JobTitle>
            <h3>CDK Global</h3>&nbsp;
            <strong>Software Engineer Intern, June 2017 - September 2017</strong>
          </JobTitle>
          <BulletedList>
            <li>Design and implement a new UI in React Js to be integrated with existing system.</li>
            <li>Develop workflow for automated testing, building, and publishing to NPM.</li>
            <li>Present project updates to department and management in weekly demo meetings.</li>
            <li>Created a design pattern for future developers to adapt for future related development.  </li>
          </BulletedList>
          <JobTitle>
            <h3>OSU School of Electrical Engineering And Computer Science</h3>&nbsp;
            <strong>Teaching Assistant, September 2016 - June 2017</strong>
          </JobTitle>
          <BulletedList>
            <li>Teach Computer Science students foundational skills in UNIX, Python, C++ and OOP.</li>
            <li>Provide assistance regarding design, programming and debugging issues students face both in person and remotely.</li>
            <li>Work with faculty to develop new curriculum and assignments.</li>
            <li>Give supplemental required lectures to students.</li>
          </BulletedList>
        </div>
      </div>
    )
  }
}

export default ResumeContent;