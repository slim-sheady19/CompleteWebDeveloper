import React from 'react';

const Scroll = (props) => {
    return (
        //we are writing style in line with JSX {{}} instead of creating a new file Scroll.css
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;