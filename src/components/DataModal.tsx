import React from 'react';
import './DataModal.scss'

interface props { open: boolean; close: () => void;}


const DataModal = (props: props) => {
    const {open, close } = props;    
    return (
      <>
      {open &&
        <div className="modalBackground">
        <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={close}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={close}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>}
    </>
    )
}

export default DataModal;