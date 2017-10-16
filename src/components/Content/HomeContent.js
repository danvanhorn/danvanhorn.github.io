import React, { Component } from 'react';
import Styled from '../../utils/styled';
import { ContentWrapper, ContentTitle, ContentSection } from '../../style/js/styledComponents';

class HomeContent extends Component {
  render() {
    return (
      <ContentWrapper>
        <ContentSection>
          <img src="../images/dvh.jpg" height="30%" width="40%"/>
          <h2>My name is Daniel Van Horn...</h2>
          <p>I'm a software developer and Junior at Oregon State University,
            pursuing my bachelor's degree in Computer Science, computer systems.
            As a bit of a non-traditional student, I found that I had more time
            to develop a passion for software engineering and decided to make it
            my career.
          </p>
          <br />
          <p>I wont say it's all sitting behind a screen. I also love to cycle, hike,
             rock climb, camp and enjoy the great outdoors away from the desk.</p>
        </ContentSection>
      </ContentWrapper>
    )
  }
}

export default HomeContent;