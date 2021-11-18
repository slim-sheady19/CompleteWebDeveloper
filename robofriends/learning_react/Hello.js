import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component{
    render() {  //always need render function in component
        return (
            //thanks to JSX we can write HTML-like code in a .js file.  we still need to use some js syntax however like className and not class
            // this div class is from tachyons
            <div className='f1 tc'> 
                <h1>Hello World</h1>
                {/* access the Hello greeting property */}
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;
