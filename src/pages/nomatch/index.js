import React, { Component } from 'react';

class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{textAlign:'center',fontSize:'24px'}}>
                404 No Found!!!
            </div>
         );
    }
}
 
export default NoMatch;