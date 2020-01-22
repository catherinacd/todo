import React from 'react'
import './Modal.css'

class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button
          className='modalOpenButton'
          onClick={() => this.setState({ isOpen: true })}
        >
          Open modal
        </button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modalBody'>
              <h1>Modal title</h1>
              <p>i am awesome modal</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Modal
