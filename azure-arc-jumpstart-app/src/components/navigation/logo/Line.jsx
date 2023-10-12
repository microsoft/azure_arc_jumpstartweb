import React from "react";
import './Line.css';

const Line = ({ ...props }) => {
  return (
    <svg
      className={'line'}
      height="23"
      viewBox="0 0 0 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L0 23" stroke="white" strokeLinecap="round" />
    </svg>
  );
};

export default Line;
