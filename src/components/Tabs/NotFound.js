import * as React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer, ContentTitle } from '../../style/js/styledComponents';

export default class NotFound extends React.Component {
  render(){
    return (
      <ContentContainer>
        <div className="content-wrapper">
          <div className="content-section" style={{textAlign: "center"}}>
            <ContentTitle>404</ContentTitle>
            <p>Whoops, the path does not match a valid page.</p>
          </div>
        </div>
      </ContentContainer>
    );
  }
};
