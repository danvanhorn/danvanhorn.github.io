import React, { Component } from 'react';
import Styled from '../../utils/styled';
import { ContentTitle } from '../../style/js/styledComponents.js';

class ContactContent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="content-section">
            <ContentTitle>Contact Me</ContentTitle>
            <div className="contact-container">
              <a href="https://github.com/danvanhorn"><span className='fa fa-github fa-5x' style={{ color: 'lightgrey' }} /></a>&nbsp;
              <a href=""><span className='fa fa-twitter fa-5x' style={{ color: 'lightgrey' }} /></a>&nbsp;
              <a href="www.linkedin.com/in/dan-van-horn"><span className='fa fa-linkedin fa-5x' style={{ color: 'lightgrey' }} /></a>&nbsp;&nbsp;
              <a href="mailto:dan.vanhorn17@gmail.com"><span className='fa fa-envelope fa-5x' style={{ color: 'lightgrey' }} /></a>&nbsp;
            </div>
        </div>
      </div>
    )
  }
}

export default ContactContent;