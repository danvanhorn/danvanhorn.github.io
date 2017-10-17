import React from 'react';
import PropTypes from 'prop-types';
import { Code } from '../../style/js/style';
import { ContentContainer, ContentWrapper } from '../../style/js/styledComponents';

class PageNotFound extends React.Component {
  render(){
    return (
      <ContentContainer>
        <ContentWrapper>
          Sorry, the path does not match a valid page.
        </ContentWrapper>
      </ContentContainer>
    );
  }
}

export default PageNotFound;