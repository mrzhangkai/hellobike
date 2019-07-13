import React, { Component } from 'react';
import '../home/home.less'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home-wrap">
                HelloBike哈罗单车后台管理系统
            </div>
         );
    }
}
 
export default Home;