import React, { Component } from 'react'
import Annotation from './Annotation'

export default class Footer extends Component {
    render() {
        return(
            <div id="footer">
                <div className="container">
                    <div className="columns heading is-centered">
                        <div className="column is-one-third heading-column">
                            <div className="line"></div>
                        </div>
                        <div className="column is-one-third heading-column">
                            <h1>Find Me Here</h1>
                        </div>
                        <div className="column is-one-third heading-column">
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                    
                        <div className="column is-one-third footer-nav relative">
                            <nav>
                                <a href="mailto:tmunzar@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img className="icon" src={process.env.PUBLIC_URL + '/images/envelope-doodle-01.png'} alt="email doodle" /> 
                                        tmunzar@gmail.com
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/in/tmunzar" target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img className="icon prof" src={process.env.PUBLIC_URL + '/images/prof-doodle-01.png'} alt="linkedin doodle" /> 
                                        linkedin
                                    </span>
                                </a>
                                <a href="https://twitter.com/tmunzar" target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img className="icon birdy" src={process.env.PUBLIC_URL + '/images/birdy-doodle-01.png'} alt="linkedin doodle" />
                                        twitter
                                    </span>
                                </a>
                                <Annotation 
                                    text="best place to reach me if you want to collaborate" 
                                    textRotate="-10deg"
                                    style={{
                                        width: 260,
                                        top: 10,
                                        left: -190,
                                    }}
                                    arrowRotate="100deg"
                                    arrowTranslate={['-20px','280px']}
                                    arrowFlip
                                />

                                <Annotation 
                                    text="if you want to connect" 
                                    textRotate="-10deg"
                                    style={{
                                        width: 240,
                                        top: 120,
                                        right: -160,
                                    }}
                                    arrowRotate="130deg"
                                    arrowTranslate={['-10px', '80px']}
                                    animDelay={300}
                                />

                                <Annotation
                                    text="here i ramble"
                                    textRotate="-10deg"
                                    style={{
                                        left: -40,
                                    }}
                                    arrowRotate="-80deg"
                                    arrowTranslate={['85px',' 140px']}
                                    animDelay={600}
                                />
                            </nav>
                        </div>
                    </div>

                    
                    <div className="columns is-centered">
                        <div className="column source">
                            <p>
                                This website is carefully crafted using pen & paper, figma, react, vivus.js, among other things.
                            </p>
                            <p>
                                Find the source code <a href="https://github.com/tmunzar/portfolio-react" target="_blank" rel="noopener noreferrer">here</a>.
                                <img src={process.env.PUBLIC_URL + '/images/octo-cat-01.png'} style={{width:30, paddingTop:5}} alt="A sketched doodle of the Github OctoCat icon" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}