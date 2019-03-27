import React from "react";

const Dialog = ({ visible, onCloseClick, children }) => (
  <section className={visible ? "dialog dialog--active" : "dialog"}>
    <div className="close-thik" onClick={onCloseClick} />
    {children}
  </section>
);

export default Dialog;
