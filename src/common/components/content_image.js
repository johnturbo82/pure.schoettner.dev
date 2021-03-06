import React from "react";
import Img from "gatsby-image"

const PassionImage = (props) => {
    return (
        <figure className={!(props.orientation) ? "full" : props.orientation}>
            <Img style={{maxWidth: '800px'}} fluid={props.src} alt={props.description} />
            <figcaption>{props.description}</figcaption>
        </figure>
    )
}

export default PassionImage