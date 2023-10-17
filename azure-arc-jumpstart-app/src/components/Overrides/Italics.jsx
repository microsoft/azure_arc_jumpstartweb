import React from "react";
import "./Italics.css";

// Override Italics
export const Italics = (props) => {
  return <em {...props} className="custom-italics" />;
};