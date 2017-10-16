import React, { Component } from 'react';
import Styled from '../../utils/styled';
import { ContentTitle, ContentSection } from '../../style/js/styledComponents';

const PictureContainer = Styled('div',{
  display: 'flex',
  justifyContent: 'center'
})

class HomeContent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="content-section">
          <PictureContainer >
            <img src="../images/dvh.jpg" height="30%" width="40%"/>
          </PictureContainer>
          <ContentTitle>I'm Daniel Van Horn...</ContentTitle>
          <p>I'm a software developer and Junior at Oregon State University,
            pursuing my bachelor's degree in Computer Science, computer systems.
            As a bit of a non-traditional student, I found that I had more time
            to develop a passion for software engineering and decided to make it
            my career.
          </p>
          <br />
          <p>I wont say it's all sitting behind a screen. I'm an avid cyclist, pretty
             much anything on two wheels, and I ride my bike every day. I rock climb, hike,
             camp, pretty much anything outdoors.
          </p>
        </div>
      </div>
    )
  }
}

export default HomeContent;