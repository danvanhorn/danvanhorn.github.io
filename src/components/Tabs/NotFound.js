import * as React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer, ContentWrapper } from '../../style/js/styledComponents';

class NotFound extends React.Component {
  render(){
    return (
      <ContentContainer>
        <ContentWrapper>
          Whoops, the path does not match a valid page.
        </ContentWrapper>
      </ContentContainer>
    );
  }
}

export default NotFound;
