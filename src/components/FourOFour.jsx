import React, { Component } from 'react'

export default class FourOFour extends Component {

    componentDidMount() {
        document.title = '404 Page Not Found - Talal Munzar - Designer, Developr, and Researcher of Digital Experiences';
    }
    
    render() {
        return(
            <div id="404">
                <section className="is-light">
                    <div className="container">
                        <div className="columns is-centered">
                            <h1>404 - Page not found</h1>
                        </div>
                    </div>
                </section>
            </div>
        )
        
    }
}