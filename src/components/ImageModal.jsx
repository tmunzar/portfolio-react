import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

export default class Image extends Component {

    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalOpen: true })
    }

    closeModal() {
        this.setState({ modalOpen: false})
    }

    render() {
        return(
            <>
                <img 
                    className="has-modal" 
                    src={this.props.src} 
                    alt={this.props.alt} 
                    onClick={this.openModal} 
                    style={this.props.style}
                    />
                <CSSTransition 
                    in={this.state.modalOpen}
                    timeout={300}
                    unmountOnExit
                    classNames="zoomInUp"
                >
                    <div className="modal image-modal is-active">
                        <div className="modal-background" onClick={this.closeModal}></div>
                        <div className="modal-content" style={{backgroundColor: '#fff', textAlign:'center', padding: 20}}>
                            <img src={this.props.src} alt={this.props.alt} />
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
                    </div>
                </CSSTransition>
            </>
        )
    }

}