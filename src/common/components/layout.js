import React from 'react'

import SiteMeta from "./site_meta";
import Header from './header'
import SideBar from "./sidebar";
import Content from './content'
import Footer from './footer'
import BreadCrump from './breadcrump'

class Layout extends React.Component {
    render() {

        return (
            <div id="container" className="site-container">
                <SideBar path={this.props.path} />
                <SiteMeta sitetitle={this.props.sitetitle} path={this.props.path} />
                <div id="site">
                    <Header />
                    <BreadCrump sitetitle={this.props.sitetitle} parent={this.props.parent} />
                    <hr />
                    <Content type="text">
                        <div className="stage">
                            {this.props.children}
                        </div>
                    </Content>
                    <hr />
                    <Content id="footer">
                        <Footer />
                    </Content>
                </div>
            </div >
        )
    }
}

export default Layout
