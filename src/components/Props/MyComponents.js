import React from 'react';
import ReactDom from'react-dom';
import Convert from '../JSTOJSX/Convert';
import ComponentWithProps from '../Props/ComponentWithProps';

function MyComponents(){
    return(
        <>
         <ComponentWithProps header ="Welcome Folks to HALLOWEEN TOWN"/>
         <ComponentWithProps content = "Halloween is about ghouls and tricks and slime and pumpkins"/>
         <ComponentWithProps number = "12 pumpkins"/>
        </>

    );
}
export default MyComponents;