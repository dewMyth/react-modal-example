import React, { Component } from 'react'

import Modal from 'react-modal'

export default class App extends Component {

  state = {
    modalIsOpen : false
  }

  openCloseModal = () => {
    this.setState({
      modalIsOpen : !this.state.modalIsOpen
    })
  }

  render() {
    return (
      <div>

        <button onClick={() => this.openCloseModal()}>OPEN</button>

       <Modal isOpen={this.state.modalIsOpen}>
         <h2>Modal Title</h2>
         <p>Modal Body</p>
         <button onClick={() => this.openCloseModal()}>CLOSE</button>
       </Modal>
      </div>
    )
  }
}
