import React from 'react';
import ReactDom from'react-dom';
import Hello from './Hello'

function PropComp () {
    return (
        <>
           <Hello name="Chris"/>
           <Hello name="P."/>
           <Hello name="Bacon"/>
        </>

    );
}
export default PropComp;