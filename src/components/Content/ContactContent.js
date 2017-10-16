import React, { Component } from 'react';
import Styled from '../../utils/styled';
import { ContentWrapper, ContentTitle, ContentSection } from '../../style/js/styledComponents.js';

const ContactContainer = Styled('div',{
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center'
})

const Link = Styled('a', {
  paddingLeft: '1em'
})


class ContactContent extends Component {
  render() {
    return (
      <ContentWrapper>
        <ContentSection>
          <ContentTitle>Contact Me</ContentTitle>
          <ContactContainer>
          <Link href="https://github.com/danvanhorn"><span className='fa fa-github fa-5x' style={{color: 'lightgrey'}}/></Link>
          <Link href=""><span className='fa fa-twitter fa-5x' style={{color: 'lightgrey'}}/></Link>
          <Link href="www.linkedin.com/in/dan-van-horn"><span className='fa fa-linkedin fa-5x' style={{color: 'lightgrey'}}/></Link>
          <Link href="mailto:dan.vanhorn17@gmail.com"><span className='fa fa-envelope fa-5x' style={{color: 'lightgrey'}}/></Link>
        </ContactContainer>
        </ContentSection>
      </ContentWrapper>
    )
  }
}

export default ContactContent;