import React from "react";
import "./model.css";
function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <header className="title">
          <p className="titleCloseBtn" onClick={() => closeModal(false)}>
            X
          </p>
        </header>
        <section className="body">
          <label htmlFor="link" className="label">
            <p>Past google sheet Link!!</p>
          </label>
          <input type="text" placeholder="paste your google sheet link" />
        </section>
        <div className="footer">
          {closeModal}
          <button id="cancelBtn" onClick={() => closeModal(false)}>
            Cansel
          </button>
          <button className="import">Import</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
