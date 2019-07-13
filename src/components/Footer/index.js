import React, { Component } from 'react';
import '../Footer/index.less'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                版权所有:张凯(推荐使用谷歌浏览器,可以获得更优的操作性能)
            </div>
         );
    }
}
 
export default Footer;