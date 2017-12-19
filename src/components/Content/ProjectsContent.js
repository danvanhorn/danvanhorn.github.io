import React, { Component } from 'react';
import { ContentTitle, ContentSection } from '../../style/js/styledComponents';

class ProjectsContent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="content-section">
          <ContentTitle>Projects</ContentTitle>
          <div className="resume-title">
            <h3>Smarter Balanced Score Guide&nbsp;
              <a className="contact-link" href="https://github.com/osu-cass/AP_ScoringGuide">
                <span className="fa fa-github fa-sm"/>
              </a>
            </h3>
            <strong>September 2017 - Present</strong>
          </div>
          <p>React, TypeScript, TravisCI, AWS, Docker, Git, LESS, HTML, CSS, Jest, Storybook</p>
          <div className="resume-title">
            <h3>OSU-CASS/React Advanced Filter&nbsp;
              <a className="contact-link" href="https://github.com/osu-cass/react-advanced-filter/tree/master">
              <span className="fa fa-github fa-sm"/>
              </a>
            </h3>
            <strong>September 2013 - June 2014</strong>
          </div>
          <p>React, TypeScript, TravisCI, NPM, Git, Webpack, Jest, Storybook</p>
        </div>
      </div>
    )
  }
}

export default ProjectsContent;