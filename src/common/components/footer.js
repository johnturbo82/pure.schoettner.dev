import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Facebook from '../../images/social_icons/facebook.svg'
import Github from '../../images/social_icons/github.svg'
import Instagram from '../../images/social_icons/instagram.svg'
import LinkedIn from '../../images/social_icons/linkedin.svg'
import Twitter from '../../images/social_icons/twitter.svg'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    street
                    postal_code
                    city
                    email
                    mailto
                    mobile
                    mobileto
                }
            }
        }
    `)

    return (
        <footer className="footer">
            <div className="stage">
                <h2>Impressum</h2>
                <p>{data.site.siteMetadata.author}<br />{data.site.siteMetadata.street}<br />{data.site.siteMetadata.postal_code} {data.site.siteMetadata.city}</p>
                <p><a href={data.site.siteMetadata.mailto}>{data.site.siteMetadata.email}</a></p>
                <p><a href={data.site.siteMetadata.mobileto}>{data.site.siteMetadata.mobile}</a></p>
                <div className="social_icons">
                    <a style={{display: 'inline-block', height: '30px', width: '30px', backgroundColor: '#181717', padding: '2px', marginRight: '10px'}} href="https://github.com/johnturbo82/" title="Github" className="github">
                        <img src={Github} alt="Github" title="Github" />
                    </a>
                    <a style={{display: 'inline-block', height: '30px', width: '30px', backgroundColor: '#0A66C2', padding: '2px', marginRight: '10px'}} href="https://www.linkedin.com/in/oliver-schoettner/" title="LinkedIn" className="linkedin">
                        <img src={LinkedIn} alt="LinkedIn" title="LinkedIn" />
                    </a>
                    <a style={{display: 'inline-block', height: '30px', width: '30px', backgroundColor: '#1DA1F2', padding: '2px', marginRight: '10px'}} href="https://twitter.com/johnturbo82" title="Twitter" className="twitter">
                        <img src={Twitter} alt="Twitter" title="Twitter" />
                    </a>
                    <a style={{display: 'inline-block', height: '30px', width: '30px', backgroundColor: '#E4405F', padding: '2px', marginRight: '10px'}} href="https://www.instagram.com/johnturbo82/" title="Instagram" className="instagram">
                        <img src={Instagram} alt="Instagram" title="Instagram" />
                    </a>
                    <a style={{display: 'inline-block', height: '30px', width: '30px', backgroundColor: '#1877F2', padding: '2px'}} href="https://www.facebook.com/johnturbo82/" title="Facebook" className="facebook">
                        <img src={Facebook} alt="Facebook" title="Facebook" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer