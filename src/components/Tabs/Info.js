import React, { Component } from 'react';
import { ContentContainer } from '../../style/styledComponents.js';
import InfoContent from '../Content/InfoContent';

class Info extends Component {
    render() {
        return (
            <ContentContainer>
                <InfoContent/>
            </ContentContainer>
        )
    }
}

export default Info;