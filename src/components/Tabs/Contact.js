import React, { Component } from 'react';
import { ContentContainer } from '../../style/js/styledComponents.js';
import ContactContent from '../Content/ContactContent';

class Contact extends Component {
    render() {
        return ( 
        <ContentContainer>
            <ContactContent />
        </ContentContainer>
        )
    }
}

export default Contact;