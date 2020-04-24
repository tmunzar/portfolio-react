import React, { Component } from 'react'
import Annotation from './Annotation'
import { Link } from "react-router-dom"

export default class Intro extends Component {
    render() {
        return (
            <section id="intro">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds">
                            <img 
                                src={process.env.PUBLIC_URL + '/images/about/me-in-a-circle-01.png'} 
                                alt="Talal Munzar's face surrouned by sketch doodles relevant to the UI/UX field." 
                                style={{ width: 200, display: 'block', margin: '0 auto 50px'}}
                                className="show-only-for-mobile"  
                            />
                            <h1>Hi I'm Talal and I like to</h1>
                            <h1 className="primary">Research, Design & Develop</h1>
                            <h1>human-centered & joyful digital experiences.</h1>

                            <div className="relative is-inline-block hide-for-mobile">
                                <Link to="/about">
                                    <img 
                                        src={process.env.PUBLIC_URL + '/images/home-doodle-01.png'}
                                        alt="A sketched doodle representation of my research, design and development skills. It contains icons representing those skills."
                                        style={{width: 300, marginTop: 15}}
                                    />
                                </Link>
                                <Annotation
                                        style={{
                                            top: 20,
                                            right: -210,
                                            width: 170,
                                        }}
                                        text="some of the things i can do!"
                                        textRotate="-12deg"
                                        arrowFlip
                                        arrowTranslate={['25px', '20px']}
                                        animOffset={-100}
                                        animDelay={100}
                                    />
                            </div>
                        </div>
                        <div className="column is-half is-paddingless relative hide-for-mobile" style={{marginTop:'auto'}}>
                            <Annotation
                                style={{
                                    top: -10,
                                    right: 230,
                                }}
                                text="this is me"
                                textRotate="-20deg"
                                arrowTranslate={['7px', '12px']}
                                animOffset={-100}
                                animDelay={400}
                            />
                            <img 
                                src={process.env.PUBLIC_URL + '/images/me-01.png'}
                                alt="It's a me! Talal Munzar!"
                                style={{float:'right', width: 570, marginBottom: '-0.75rem'}}
                            />
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}