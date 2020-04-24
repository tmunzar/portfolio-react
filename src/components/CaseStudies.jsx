import React, { Component } from 'react'
import Tag from './Tag'
import { Link } from "react-router-dom"

export default class Intro extends Component {
    render() {
        return (
            <section id="case-studies" className="is-light-grey">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="section-heading">Case Studies</h1>
                        </div>
                    </div>

                    <div className="case-study-list">
                        <div className="case-study-listing">
                            <div className="columns">
                                <div className="column is-two-fifths">
                                    <img src={process.env.PUBLIC_URL + '/images/stardog-studio/screen-01.jpg'} alt="Screen of the workspace section of Stardog Studio, a Graph Database querying application." />
                                </div>
                                <div className="column">
                                    <h2>
                                        <Link to="/designing-ux-in-a-b2b-environment-for-a-technical-audience-stardog-studio">
                                            Doing UX in a B2B environment for a technical audience.  
                                        </Link>
                                    </h2>
                                    <p>
                                    As a UX Intern at Stardog, I was tasked to design the second iteration of Stardog Studio after its first release failed.
                                    </p>
                                    <div className="tags-list">
                                        <Tag text="Research" icon="research" />
                                        <Tag text="Design" icon="design" />
                                        <Tag text="Prototype" icon="prototype" />
                                        <Tag text="Develop" icon="develop" />
                                    </div>
                                    <Link className="button column is-4-desktop is-6-tablet" to="/designing-ux-in-a-b2b-environment-for-a-technical-audience-stardog-studio">
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="case-study-listing">
                            <div className="columns">
                                <div className="column is-two-fifths">
                                    <img src={process.env.PUBLIC_URL + '/images/studao/main-01.png'} alt="Mobile Screens for StuDAO, an online learning platform for Independent Filmmakers" />
                                </div>
                                <div className="column">
                                    <h2>
                                        <Link to="/designing-an-online-learning-platform-for-independent-filmmakers">
                                            Designing an online learning platform for Independent Filmmakers 
                                        </Link>
                                    </h2>
                                    <p>
                                        For my Masters Human-Computer Interaction Capstone Project, I designed an online learning platform for an industry client that sought to introduce the concept of certification to the independent film industry.
                                    </p>
                                    <div className="tags-list">
                                        <Tag text="Research" icon="research" />
                                        <Tag text="Design" icon="design" />
                                        <Tag text="Prototype" icon="prototype" />
                                    </div>
                                    <Link className="button column is-4-desktop is-6-tablet" to="/designing-an-online-learning-platform-for-independent-filmmakers">
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }

}