/* eslint-disable react/destructuring-assignment */
import React from 'react';

function BotaoLink(props) {
  return (
    <a
      className={props.className}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

export default BotaoLink;
