import React from 'react';
import ReactDom from'react-dom';


function ComponentWithProps(props){
    return(
        <>
          <h1>{props.header}</h1>
          <p>{props.content}</p>
          <p>{props.number}</p>
        </>
    );

}
export default ComponentWithProps;