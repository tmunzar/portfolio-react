import React, { Component } from 'react'
import Annotation from './Annotation'
import Image from './ImageModal'
import Tag from './Tag'

export default class Studao extends Component {
    render() {
        return(
            <article>
                <header>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <h1>
                                A dashboard to for the value proposition of a Graph Database
                            </h1>
                            <p>
                                As a UX Intern, at Stardog,  I was tasked to design the second iteration of Stardog Studio, following the failure of its first release.
                            </p>

                            <div className="details">
                                <p>
                                    <strong>Role:</strong> Intern
                                </p>
                                <p>
                                    <strong>Product:</strong> Stardog Studio
                                </p>
                                <p>
                                    <strong>Collaborators:</strong> Customer Success, Sales Engineers, Frontend Engineers, Backend Engineers 
                                </p>
                                <p>
                                    <strong>Duration:</strong> 3 Months (Summer 2018 Internship)
                                </p>

                            </div>

                            <div className="tags-list">
                                <Tag text="Research" icon="research" />
                                <Tag text="Design" icon="design" />
                                <Tag text="Prototype" icon="prototype" />
                                <Tag text="Develop" icon="develop" />
                            </div>

                        </div>
                        <div className="column">
                            <Image src={process.env.PUBLIC_URL + '/images/stardog-studio/screen-01.jpg'} alt="Stardog Studio Workspace" />
                        </div>
                    </div>
                </header>
            </article>
        )
    }
}