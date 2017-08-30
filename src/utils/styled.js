import React from 'react';

const Styled = (Element, argument) => {
    return props => {
        let style = null;
        const {styleArgs, ...newProps} = props;
        if(typeof argument === 'function'){
            style = argument(styleArgs);
        }else{
            style = argument;
        }
        return <Element style={style} {...newProps}/>;
    }
}

export default Styled;