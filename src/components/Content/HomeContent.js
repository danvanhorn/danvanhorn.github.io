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
            <img src="../images/dvh.jpg" height="30%" width="40%" style={{boxShadow: '1px 1px 2px grey'}}/>
          </PictureContainer>
          <ContentTitle>I'm Daniel Van Horn...</ContentTitle>
          <p>I'm a Junior at Oregon State University, pursuing my bachelor's degree in Computer Science, 
            computer systems and a software engineer at the Center for Applied Systems and Software at OSU,
            CASS for short. Recently I've been specializing in creating web applications and microservices in 
            .Net core and Node Js, and building front end user interfaces in React Js.  
          </p>
          <br />
          <p>I'm an avid cyclist, and ride my bike every day. I love hiking, camping, rock climbing, 
            and every other outdoor activity that Oregonians are obligated to enjoy.  
          </p>
        </div>
      </div>
    )
  }
}

export default HomeContent;