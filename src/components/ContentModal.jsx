import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

export default class ContentModal extends Component {

    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(e) {
        e.preventDefault();
        this.setState({ modalOpen: true });
    }

    closeModal() {
        this.setState({ modalOpen: false});
    }

    render() {
        return(
            <>
                <a href="#" className="button column is-4-desktop is-6-tablet" onClick={this.openModal}>View more info</a>
                <CSSTransition 
                        in={this.state.modalOpen}
                        timeout={300}
                        unmountOnExit
                        classNames="zoomInUp"
                >
                    <div className="modal content-modal is-active">
                        <div className="modal-background" onClick={this.closeModal}></div>
                            <div className="modal-content" style={{backgroundColor: '#fff', padding: 20}}>
                                { this.props.children }
                            </div>
                        <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
                    </div>
                </CSSTransition>
            </>
        )
    }
}