import React from 'react';
import PropTypes from 'prop-types';
import { Code } from '../../style/style';
import { ContentContainer, ContentWrapper } from '../../style/styledComponents';

const propTypes = {
  location: PropTypes.object.isRequired,
};

const PageNotFound = props => {
  return (
    <ContentContainer>
      <ContentWrapper>
        Page not found - the path, <Code>{props.location.pathname}</Code>,
        did not match any React Router routes.
      </ContentWrapper>
    </ContentContainer>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;