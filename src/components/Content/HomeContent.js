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
            I work at the Center for Applied Systems and Software at OSU, CASS 
            for short, developing web applications for many clients.  
          </p>
          <br />
          <p>I'm an avid cyclist, and ride my bike every day rain or shine. It's almost
            required to love the outdoor in the Pacific Northwest and I am no exception.
            I love hiking, camping, rock climbing, and enjoying the great outdoors. 
          </p>
        </div>
      </div>
    )
  }
}

export default HomeContent;