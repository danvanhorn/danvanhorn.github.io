import React, { Component } from 'react';
import Styled from '../../utils/styled';
import { ContentWrapper, ContentTitle, ContentSection } from '../../style/js/styledComponents.js';

const JobTitle = Styled('div',{
  display: 'flex',
  flexflow: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#2B5D7F'
})

const UTitle = Styled('h2', {
  textAlign: 'left',
  width: '100%',
  borderBottom: '1px solid #4CB7FF'
})



class ResumeContent extends Component {
  render() {
    return (
      <ContentWrapper>
        <ContentSection>
          <UTitle>Education</UTitle>
          <ul>
            <li>
              <strong>Oreg State University, Corvallis OR</strong>&nbsp;
             | BS Computer Science | SEPTEMBER  2015 -  est. JUNE 2019
            </li>
            <li>
              <strong>Chemeketa Community College, Mcminnville OR</strong>&nbsp;
              | Associate’s Degree | SEPTEMBER  2013 - JUNE 2014  ||  3.26 GPA
            </li>
          </ul>
        </ContentSection>
        <ContentSection>
        <UTitle>Experience</UTitle>
          <JobTitle>
            <h3>Center For Applied Systems and Software</h3>&nbsp;
            <strong>Software Developer, May 2016 - Present</strong>
          </JobTitle>
          <ul>
            <li>Collaborate with team members in an to develop and maintain applications for a government system using AGILE practices.</li>
            <li>Update outdated technologies and design methodologies using modern practices.</li>
            <li>Develop RESTful geospatial services to supply dynamic information to web applications using MVC pattern and ArcGIS API.</li>
            <li>Adapt at dynamic project specifications and full stack full stack development.</li>
          </ul>
          <JobTitle>
            <h3>CDK Global</h3>&nbsp;
            <strong>Software Engineer Intern, June 2017 - September 2017</strong>
          </JobTitle>
          <ul>
            <li>Collaborate with team members in an to develop and maintain applications for a government system using AGILE practices.</li>
            <li>Update outdated technologies, using Docker, React Js, .Net Framework and outdated design methodologies.</li>
            <li>Develop RESTful geospatial services to supply dynamic information to web applications using MVC pattern and ArcGIS API.</li>
            <li>Adapt at dynamic project specifications and full stack full stack development.</li>
          </ul>
          <JobTitle>
            <h3>OSU School of Electrical Engineering And Computer Science</h3>&nbsp;
            <strong>Teaching Assistant, September 2016 - June 2017</strong>
          </JobTitle>
          <ul>
            <li>Teach Computer Science students foundational skills in UNIX, Python, C++ and OOP.</li>
            <li>Provide assistance regarding design, programming and debugging issues students face both in person and remotely.</li>
            <li>Work with faculty to develop new curriculum and assignments.</li>
            <li>Give supplemental required lectures to students.</li>
          </ul>
        </ContentSection>
      </ContentWrapper>
      )
  }
}

export default ResumeContent;