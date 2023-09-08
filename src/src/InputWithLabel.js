import React, { useRef, useEffect } from 'react';

// Declare and export a new functional React component named InputWithLabel

export function InputWithLabel(props) {
  // Destructure the props object into variables
  const { id, label, value, type, onChange } = props;

    // Use the useRef React hook to create an imperative ref named inputRef
    const inputRef = useRef();
  // Define a useEffect React hook without dependency list
    useEffect(() => {
    inputRef.current.focus();
});
  // Return the JSX element for the input with label component
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} value={props.value} onChange={props.onChange} ref={inputRef} />
    </>
  );
}
