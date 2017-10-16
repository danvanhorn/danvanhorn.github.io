import React, { Component } from 'react';
import { ContentContainer } from '../../style/js/styledComponents.js';
import ResumeContent from '../Content/ResumeContent';

class Resume extends Component {
    render() {
        return (
            <ContentContainer>
                <ResumeContent/>
            </ContentContainer>
        )
    }
}

export default Resume;