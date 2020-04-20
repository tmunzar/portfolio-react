import React, { Component } from 'react'
import Annotation from './Annotation'
import Loader from './Loader'
import Tag from './Tag'
import { Link } from "react-router-dom";
import ContentModal from './ContentModal';
import ImageModal from './ImageModal';

export default class Home extends Component {

    componentDidMount() {
        document.title = 'Talal Munzar - Designer, Developr, and Researcher of Digital Experiences';
    }

    render() {
        return (
            <div id="home-page">
                <Loader />
                <section id="intro">
                    <div className="container">
                        <div className="columns is-gapless is-vcentered">
                            <div className="column is-two-thirds">
                                <div className="columns">
                                    <div className="column is-8 is-paddingless">
                                        <h1 className="text-right">Hi I'm Talal and I like to</h1>
                                    </div>
                                    <div className="column is-4 is-paddingless">
                                        <h1 className="primary">Research,<br/>Design &<br/>Develop</h1>
                                        <h2>human-centered &<br/>joyful digital<br/>experiences.</h2>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="column is-half relative" style={{marginTop:'auto'}}>
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
                                    style={{float:'right', width: 570}}
                                />
                        </div>
                        </div>
                    </div>
                </section>

                <section id="case-studies" className="is-light-grey">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1>Case Studies</h1>
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
                                        As a UX Intern, at Stardog,  I was tasked to design the second iteration of Stardog Studio, following the failure of its first release.
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

                <section id="prev-work">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-half">
                                <h1>Selected Pre-UX Work</h1>
                                <p>
                                Before I set upon a dedicated UX career path, I co-ran a web design agency called <a href="http://jellyfish.com.pk" target="_blank" rel="noopener noreferrer">Jellyfish</a>. In addition to 
                                dealing directly with clients, collaborating with graphic designers, and pitching projects on 30+ projects, I also fully stack developed them. Here are some examples:
                                </p>
                            </div>
                        </div>

                        <div className="prev-work-list">
                            <div className="prev-work-listing">
                                <div className="columns">
                                    <div className="column is-one-fifth-desktop is-two-fifths-tablet image-holder">
                                        <img src={process.env.PUBLIC_URL + '/images/logos/trav2trav.png'} alt="trav2trav logo" />
                                    </div>
                                    <div className="column is-three-fifths">
                                        <h2>
                                            A Social Network for Travelers
                                        </h2>
                                        <p>
                                            My firm was tasked to build-up Trav2trav, a social network from the ground up, which included all the branding, UX/UI design, and implementation.
                                        </p>
                                        <p>
                                            <strong>Design Toolkit:</strong> Leanstack Canvas, Handrawn Sketching, Photoshop Designs, InVision Prototypes, Hi-Fi HTML Prototypes 
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong> Laravel 4, SCSS,  jQuery, Elasticsearch,  Zurb Foundation
                                        </p>
                                        <div className="tags-list">
                                            <Tag text="Design" icon="design" />
                                            <Tag text="Prototype" icon="prototype" />
                                            <Tag text="Develop" icon="develop" />
                                        </div>
                                        <ContentModal buttonText="View More Info">
                                            <div className="columns">
                                                <div className="column is-one-fifth-desktop is-two-fifths-tablet">
                                                    <img src={process.env.PUBLIC_URL + '/images/logos/trav2trav.png'} alt="trav2trav logo" />
                                                </div>
                                                <div className="column">
                                                    <h1>A Social Network for Travelers</h1>
                                                    <p>
                                                        <strong>Client:</strong> Trav2Trav LLC
                                                    </p>
                                                    <p>
                                                        <strong>Duration:</strong> 6 Months
                                                    </p>
                                                    <p>
                                                        <strong>Design Toolkit:</strong> Leanstack Canvas, Handrawn Sketching, Photoshop Designs, InVision Prototypes, Hi-Fi HTML Prototypes 
                                                    </p>
                                                    <p>
                                                        <strong>Tech Stack:</strong> Laravel 4, SCSS,  jQuery, Elasticsearch,  Zurb Foundation
                                                    </p>
                                                    <div className="tags-list">
                                                        <Tag text="Design" icon="design" />
                                                        <Tag text="Prototype" icon="prototype" />
                                                        <Tag text="Develop" icon="develop" />
                                                    </div>    
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <h2>Lo-Fi Prototype</h2>
                                                    <p>After using the Leanstack Canvas to gather requirements and determine our end-users, we sketched out different design ideas and wireframes. After settling on an idea we presented a Lo-Fi Prototype using InVision to get client validation before moving into the visual design process.</p>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/trav2trav/wireframe-01.png'} alt="Trav2Trav Wireframe" />
                                                </div>
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/trav2trav/wireframe-02.png'} alt="Trav2Trav Wireframe" />
                                                </div>
                                            </div>
                                            <div className="columns is-centered">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/trav2trav/wireframe-03.png'} alt="Trav2Trav Wireframe" />
                                                </div>
                                            </div>

                                            <div className="columns margin-top-100-mid">
                                                <div className="column is-half">
                                                    <h2>Final Designs</h2>
                                                    <p>The final design was brilliantly fleshed out by <a href="mail:mohammad.mustafa.hussain@gmail.com">Mustafa Hussain</a>.</p>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/trav2trav/screen-01.jpg'} alt="Trav2Trav screen" />
                                                </div>
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/trav2trav/screen-02.jpg'} alt="Trav2Trav screen" />
                                                </div>
                                            </div>
                                            <div className="columns is-centered">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/trav2trav/screen-03.jpg'} alt="Trav2Trav screen" />
                                                </div>
                                            </div>
                                        </ContentModal>
                                    </div>
                                    <Annotation
                                        text="This one's not online anymore, but I can show you a demo if you reach out to me!"
                                        style={{
                                            width: 250,
                                            right: 0,
                                            top: -150,
                                        }}
                                        arrowTranslate={['-70px', '20px']}
                                        arrowRotate='45deg'
                                        textRotate="-15deg"
                                    />
                                </div>
                            </div>

                            <div className="prev-work-listing">
                                <div className="columns">
                                    <div className="column is-offset-one-fifth-desktop is-one-fifth-desktop is-offset-0-tablet is-two-fifths-tablet image-holder">
                                        <img src={process.env.PUBLIC_URL + '/images/logos/rmi.svg'} alt="RMI Logo" style={{marginTop: -30}} />
                                    </div>
                                    <div className="column is-three-fifths">
                                        <h2>
                                            A Maintainable Website for a Medical Institute
                                        </h2>
                                        <p>
                                            Rehman Medical Institute is Peshawar’s leading medical college and institute. They wanted a fresh update to their website, and I was not only involved in redesigning the look and feel of it, but also developed an institution-wide maintainable content management system.
                                        </p>
                                        <p>
                                            <strong>Design Toolkit:</strong> Stakeholder Interviews, Hand drawn Sketching, Hi-fi HTML Prototypes
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong> Laravel 5, Foundation 6, VueJS, ElasticSearch
                                        </p>
                                        <div className="tags-list">
                                            <Tag text="Design" icon="design" />
                                            <Tag text="Prototype" icon="prototype" />
                                            <Tag text="Develop" icon="develop" />
                                        </div>
                                        <ContentModal buttonText="View More Info">
                                            <div className="columns">
                                                <div className="column is-one-fifth-desktop is-two-fifths-tablet">
                                                    <img src={process.env.PUBLIC_URL + '/images/logos/rmi.svg'} alt="RMI Logo" />
                                                </div>
                                                <div className="column is-three-fifths">
                                                    <h2>
                                                        A Maintainable Website for a Medical Institute
                                                    </h2>
                                                    <p>
                                                        <strong>Client:</strong> Rehman Medical Institute
                                                    </p>
                                                    <p>
                                                        <strong>Duration:</strong> 4 Months
                                                    </p>
                                                    <p>
                                                        <strong>Design Toolkit:</strong> Stakeholder Interviews, Hand drawn Sketching, Hi-fi HTML Prototypes
                                                    </p>
                                                    <p>
                                                        <strong>Tech Stack:</strong> Laravel 5, Foundation 6, VueJS, ElasticSearch
                                                    </p>
                                                    <div className="tags-list">
                                                        <Tag text="Design" icon="design" />
                                                        <Tag text="Prototype" icon="prototype" />
                                                        <Tag text="Develop" icon="develop" />
                                                    </div>
                                                    <div className="column is-5">
                                                        <a className="button" href="http://rmi.edu.pk" target="_blank" rel="noopener noreferrer">
                                                            View Live Website
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns margin-top-100-mid">
                                                <div className="column is-half">
                                                    <h2>Designs</h2>
                                                    <p>I worked closely with a graphic designer to craft the look of the website. I also took the lead of the project as its manager. I would lead the frequent meetings with the client to negotiate requirements and pitch design decisions.</p>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/rmi/screen-01.jpg'} alt="RMI Website design" />
                                                </div>
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/rmi/screen-02.jpg'} alt="RMI Website design" />
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/rmi/screen-03.jpg'} alt="RMI Website design" />
                                                </div>
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/rmi/screen-04.jpg'} alt="RMI Website design" />
                                                </div>
                                            </div>
                                            <div className="columns is-reverse is-gapless">
                                                <div className="column is-3">
                                                    <a className="button" href="http://rmi.edu.pk" target="_blank" rel="noopener noreferrer">
                                                        View Live Website
                                                    </a>
                                                </div>
                                            </div>
                                        </ContentModal>
                                    </div>
                                </div>
                            </div>

                            <div className="prev-work-listing">
                                <div className="columns">
                                    <div className="column is-one-fifth-desktop is-two-fifths-tablet image-holder">
                                        <img src={process.env.PUBLIC_URL + '/images/logos/kb17.png'} alt="Karachi Bienalle 2017 logo" />
                                    </div>
                                    <div className="column is-three-fifths">
                                        <h2>
                                            A Website to Showcase an Art Collective
                                        </h2>
                                        <p>
                                            This website was developed in close collaboration with graphic designer <a href="https://www.samyaarif.com" target="_blank" rel="noopener noreferrer">Samya Arif</a>. It's a website that showcases the artists, venues, and projects of the 2017 Karachi Biennale Artist Festival.
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong> PHP, CockpitCMS (Headless CMS), Foundation 6
                                        </p>
                                        <div className="tags-list">
                                            <Tag text="Design" icon="design" />
                                            <Tag text="Prototype" icon="prototype" />
                                            <Tag text="Develop" icon="develop" />
                                        </div>
                                        <ContentModal buttonText="View More Info">
                                            <div className="columns">
                                                <div className="column is-one-fifth-desktop is-two-fifths-tablet image-holder">
                                                    <img src={process.env.PUBLIC_URL + '/images/logos/kb17.png'} alt="Karachi Biennale 2017 logo" />
                                                </div>
                                                <div className="column is-three-fifths">
                                                    <h2>
                                                        A Website to Showcase an Art Collective
                                                    </h2>
                                                    <p>
                                                        <strong>Client:</strong> Karachi Biennale Trust
                                                    </p>
                                                    <p>
                                                        <strong>Duration:</strong> 2 Months
                                                    </p>
                                                    <p>
                                                        <strong>Tech Stack:</strong> CockpitCMS, Foundation 6
                                                    </p>
                                                    <div className="tags-list">
                                                        <Tag text="Design" icon="design" />
                                                        <Tag text="Prototype" icon="prototype" />
                                                        <Tag text="Develop" icon="develop" />
                                                    </div>
                                                    <div className="column is-5">
                                                        <a className="button" href="http://www.kbcuratorial.com" target="_blank" rel="noopener noreferrer">
                                                            View Live Website
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns margin-top-100-mid">
                                                <div className="column is-half">
                                                    <h2>Designs</h2>
                                                    <p>The designs were made by <a href="https://www.samyaarif.com" target="_blank" rel="noopener noreferrer">Samya Arif</a> to put an emphasis on the location and the artists participating in the event.</p>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/kb17/screen-01.jpg'} alt="Karachi Biennale Website design" />
                                                </div>
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/kb17/screen-02.jpg'} alt="Karachi Biennale Website design" />
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/kb17/screen-03.jpg'} alt="Karachi Biennale Website design" />
                                                </div>
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/kb17/screen-04.jpg'} alt="Karachi Biennale Website design" />
                                                </div>
                                            </div>
                                            <div className="columns is-reverse is-gapless">
                                                <div className="column is-3">
                                                    <a className="button" href="http://www.kbcuratorial.com" target="_blank" rel="noopener noreferrer">
                                                        View Live Website
                                                    </a>
                                                </div>
                                            </div>
                                        </ContentModal>
                                    </div>
                                    <Annotation
                                        text="One of the three collaborations I have done with Samya Arif. I highly recommend looking up her work!"
                                        style={{
                                            width: 310,
                                            right: -30,
                                            top: 110,
                                        }}
                                        arrowTranslate={['90px', '40px']}
                                        arrowRotate='-65deg'
                                        arrowFlip
                                        textRotate="-15deg"
                                    />
                                </div>
                            </div>

                            <div className="prev-work-listing">
                                <div className="columns">
                                    <div className="column is-offset-two-fifths-desktop is-three-fifths-desktop is-offset-0-tablet is-full-tablet">
                                        <img 
                                            className="is-hidden-tablet"
                                            src={process.env.PUBLIC_URL + '/images/logos/connectavo.svg'}  
                                            style={{
                                                width: 300,
                                                marginBottom: 10
                                            }}
                                            alt="Connectavo logo"
                                        />
                                        <h2>
                                            UI Design System & Style Guide for a Dashboard
                                        </h2>
                                        <p>
                                            I worked closely with a graphic designer to prototype and implement reusable UI patterns for the management interface along with establishing astyle guide.
                                        </p>
                                        <p>
                                            <strong>Design Toolkit:</strong> Style Guide, Design System
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong> Bootstrap, SASS
                                        </p>
                                        <div className="tags-list">
                                            <Tag text="Design" icon="design" />
                                            <Tag text="Prototype" icon="prototype" />
                                            <Tag text="Develop" icon="develop" />
                                        </div>
                                        <a href="/demo/connectavo" className="button column is-4-desktop is-6-tablet" target="_blank" rel="noopener noreferrer">
                                            View Prototype
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="prev-work-listing">
                                <div className="columns">
                                    <div className="column is-one-fifth-desktop is-two-fifths-tablet image-holder">
                                        <img src={process.env.PUBLIC_URL + '/images/logos/angry-ballerina.svg'} alt="Angry Ballerina Logo" />
                                    </div>
                                    <div className="column is-three-fifths">
                                        <h2>
                                            E-Commerce for a Boutique Clothing Brand
                                        </h2>
                                        <p>
                                            A user-centered process using wireframes was used to design a boutique user experience for the Angry Ballerina website. I helped craft the experience that suited both the user-base and the client requirements.
                                        </p>
                                        <p>
                                            <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong> Sylius,  Foundation 6
                                        </p>
                                        <div className="tags-list">
                                            <Tag text="Design" icon="design" />
                                            <Tag text="Prototype" icon="prototype" />
                                            <Tag text="Develop" icon="develop" />
                                        </div>
                                        <ContentModal buttonText="View More Info">
                                            <div className="columns">
                                                <div className="column is-one-fifth-desktop is-two-fifths-tablet image-holder">
                                                    <img src={process.env.PUBLIC_URL + '/images/logos/angry-ballerina.svg'} alt="Angry Ballerina Logo" />
                                                </div>
                                                <div className="column is-three-fifths">
                                                    <h2>
                                                        E-Commerce for a Boutique Clothing Brand
                                                    </h2>
                                                    <p>
                                                        <strong>Client:</strong> Angry Ballerina
                                                    </p>
                                                    <p>
                                                        <strong>Duration:</strong> 3 Months
                                                    </p>
                                                    <p>
                                                        <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
                                                    </p>
                                                    <p>
                                                        <strong>Tech Stack:</strong> Sylius,  Foundation 6
                                                    </p>
                                                    <div className="tags-list">
                                                        <Tag text="Design" icon="design" />
                                                        <Tag text="Prototype" icon="prototype" />
                                                        <Tag text="Develop" icon="develop" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns margin-top-50-mid">
                                                <div className="column is-half">
                                                    <h2>Wireframe</h2>
                                                    <p>
                                                        A user-centered design process using wireframes was used to design a clothing boutique user experience for this website. I worked closely with a graphic designer to craft the experience that suited both the user-base and the client requirements.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="columns is-centered">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/angry-ballerina/wireframe-01.jpg'} alt="Angry Ballerina Website Wireframe" />
                                                </div>
                                            </div>
                                            <div className="columns margin-top-100-mid">
                                                <div className="column is-half">
                                                    <h2>Final Design</h2>
                                                    <p>
                                                        Once we settled on a user experience that exhibited the boutique nature of the brand, the final design was fleshed out.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="columns is-centered">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/angry-ballerina/screen-01.jpg'} alt="Angry Ballerina Website Design" />
                                                </div>
                                            </div>
                                        </ContentModal>
                                    </div>
                                    <Annotation
                                        text="This isn’t online anymore either, but only because they were acquired!"
                                        style={{
                                            width: 250,
                                            left: 0,
                                            top: -150,
                                        }}
                                        arrowTranslate={['-20px', '20px']}
                                        arrowRotate='8deg'
                                        textRotate="-15deg"
                                    />
                                </div>
                            </div>

                            <div className="prev-work-listing">
                                <div className="columns">
                                    <div className="column is-offset-one-fifth-desktop is-one-fifth-desktop is-offset-0-tablet is-two-fifths-tablet image-holder">
                                        <img src={process.env.PUBLIC_URL + '/images/logos/good-omen-films.svg'} alt="Good Omen Films logo" />
                                    </div>
                                    <div className="column is-three-fifths">
                                        <h2>
                                            Filmmaking Brand Re-Design
                                        </h2>
                                        <p>
                                        This film baking duo from Toronto needed to refresh their brand identity and to launch a new website for a major market push.
                                        </p>
                                        <p>
                                            <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong> CSS, JQuery
                                        </p>
                                        <div className="tags-list">
                                            <Tag text="Design" icon="design" />
                                            <Tag text="Prototype" icon="prototype" />
                                            <Tag text="Develop" icon="develop" />
                                        </div>
                                        
                                        <ContentModal buttonText="View More Info">
                                            <div className="columns">
                                                <div className="column is-one-fifth-desktop is-two-fifths-tablet">
                                                    <img src={process.env.PUBLIC_URL + '/images/logos/good-omen-films.svg'} alt="Good Omen Films logo" />
                                                </div>
                                                <div className="column is-three-fifths">
                                                    <h2>
                                                        Filmmaking Brand Re-Design
                                                    </h2>
                                                    <p>
                                                        <strong>Client:</strong> Good Omen Films
                                                    </p>
                                                    <p>
                                                        <strong>Duration:</strong> 1 Month
                                                    </p>
                                                    <p>
                                                        <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
                                                    </p>
                                                    <p>
                                                        <strong>Tech Stack:</strong> CSS, JQuery
                                                    </p>
                                                    <div className="tags-list">
                                                        <Tag text="Design" icon="design" />
                                                        <Tag text="Prototype" icon="prototype" />
                                                        <Tag text="Develop" icon="develop" />
                                                    </div>
                                                    <div className="column is-5">
                                                        <a className="button" href="http://www.goodomenfilms.com" target="_blank" rel="noopener noreferrer">
                                                            View Live Website
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="column is-half">
                                                    <h2>Design</h2>
                                                    <p>
                                                        Once we settled on a user experience that showcased the boutique nature of the brand, the final design was fleshed out.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="columns is-centered">
                                                <div className="column is-half">
                                                    <ImageModal src={process.env.PUBLIC_URL + '/images/j-work/good-omen-films/screen-01.jpg'} alt="Good Omen Films Website Design" />
                                                </div>
                                            </div>
                                            <div className="columns is-reverse is-gapless">
                                                <div className="column is-3">
                                                    <a className="button" href="http://goodomenfilms.com" target="_blank" rel="noopener noreferrer">
                                                        View Live Website
                                                    </a>
                                                </div>
                                            </div>
                                        </ContentModal>
                                    </div>
                                </div>
                            </div>


                            <div className="prev-work-listing">
                                <div className="columns">
                                    <div className="column is-one-fifth-desktop is-two-fiths-tablet image-holder">
                                        <img src={process.env.PUBLIC_URL + '/images/logos/jellyfish.svg'} style={{width: '100%'}} alt="Jellyfish Logo"  />
                                    </div>
                                    <div className="column is-three-fifths">
                                        <h2>
                                            A Design Firm Website
                                        </h2>
                                        <p>
                                            Mustafa Hussain, my co-founder with Jellyfish and probably the best designer I have ever worked with, came up with this brilliant branding and web-design for our firm. I made sure to execute it closely as Mustafa envisioned it.
                                        </p>
                                        <p>
                                            <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong> SCSS, JQuery, Ruby (Middleman)
                                        </p>
                                        <div className="tags-list">
                                            <Tag text="Prototype" icon="prototype" />
                                            <Tag text="Develop" icon="develop" />
                                        </div>
                                        <a href="http://jellyfish.com.pk" className="button column is-4-desktop is-6-tablet" target="_blank" rel="noopener noreferrer">
                                            View Website
                                        </a>
                                    </div>
                                    <Annotation
                                        text="this was my firm! We worked to bring design thinking into a space where it was seldom heard of!"
                                        style={{
                                            width: 310,
                                            left: 0,
                                            bottom: -247,
                                        }}
                                        arrowTranslate={['30px', '270px']}
                                        arrowRotate='220deg'
                                        textRotate="-15deg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }   
}