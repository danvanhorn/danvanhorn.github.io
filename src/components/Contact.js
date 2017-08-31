import React, { Component } from 'react';
import { ContentContainer } from '../style/styledComponents.js';
import ContactContent from './ContactContent';



class Contact extends Component {
    render() {
        return (
            <ContentContainer>
                <ContactContent/>
            </ContentContainer>
        )
    }
}

export default Contact;