import React from 'react';

export function FunctionalComponent(props) {
  const { text } = props;

  return (
    <strong>
      {text}
    </strong>
  );
}
