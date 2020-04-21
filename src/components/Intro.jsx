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
                            <h1>Hi I'm Talal and I like to</h1>
                            <h1 className="primary">Research, Design & Develop</h1>
                            <h1>human-centered & joyful digital experiences.</h1>

                            <div className="relative is-inline-block">
                                <Link to="/about">
                                    <img 
                                        src={process.env.PUBLIC_URL + '/images/home-doodle-01.png'}
                                        alt="A sketched doodle representation of my research, design and development skills. It contains icons representing those skills."
                                        style={{width: 300, marginTop: 15}}
                                    />
                                    <Annotation
                                        style={{
                                            top: 40,
                                            right: -240,
                                            width: 200,
                                        }}
                                        text="some of things i can do!"
                                        textRotate="-12deg"
                                        arrowFlip
                                        arrowTranslate={['25px', '20px']}
                                        animOffset={-100}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="column is-half is-paddingless relative" style={{marginTop:'auto'}}>
                            <Annotation
                                style={{
                                    top: -10,
                                    right: 230,
                                }}
                                text="this is me"
                                textRotate="-20deg"
                                arrowTranslate={['7px', '12px']}
                                animOffset={-100}
                            />

                            {/* <Annotation
                                style={{
                                    top:100,
                                    right: 350,
                                    width: 130,
                                }}
                                text="yes, this is an oversized soccer ball"
                                textRotate="-20deg"
                                arrowTranslate={['-50px', '6px']}
                                arrowRotate="42deg"
                                animDelay={500}
                            /> */}
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