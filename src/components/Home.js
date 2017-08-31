import React, { Component } from 'react';
import { ContentContainer } from '../style/styledComponents.js';
import HomeContent from './HomeContent'

class Home extends Component {
    render() {
        return (
            <ContentContainer>
                <HomeContent/>
            </ContentContainer>
        )
    }
}

export default Home;