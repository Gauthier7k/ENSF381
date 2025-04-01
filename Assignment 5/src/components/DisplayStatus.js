import React from "react";
import './styles.css';

function DisplayStatus({ type, message }) {
  const statusClass = type === "success" ? "success" : type === "error" ? "error" : "";
  
  return <div className={`message ${statusClass}`}>{message}</div>;
}

export default DisplayStatus;