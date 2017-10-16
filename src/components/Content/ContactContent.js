import React, { Component } from 'react';
import { ContentWrapper, ContentTitle, ContentSection } from '../../style/js/styledComponents.js';

class ContactContent extends Component {
  render() {
    return (
      <ContentWrapper>
        <ContentSection>
          <ContentTitle>Contact Me</ContentTitle>
        </ContentSection>
      </ContentWrapper>
    )
  }
}

export default ContactContent;