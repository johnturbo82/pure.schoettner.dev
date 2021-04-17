import React from 'react'

import SiteMeta from "./site_meta";
import Header from './header'
import SideBar from "./sidebar";
import Content from './content'
import Footer from './footer'

class Layout extends React.Component {
    render() {

        return (
            <div id="container" className="site-container">
                <SideBar path={this.props.path} />
                <SiteMeta sitetitle={this.props.sitetitle} />
                <div id="site">
                    <Header />
                    <Content type="text">
                        {this.props.children}
                    </Content>
                    <Content id="footer">
                        <Footer />
                    </Content>
                </div>
            </div >
        )
    }
}

export default Layout