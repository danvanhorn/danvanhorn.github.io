import React, { Component } from 'react';
import { ContentContainer } from '../../style/styledComponents.js';
import ProjectsContent from '../Content/ProjectsContent';

class Projects extends Component {
    render() {
        return (
            <ContentContainer>
                <ProjectsContent/>
            </ContentContainer>
        )
    }
}

export default Projects;