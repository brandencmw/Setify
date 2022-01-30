import React from 'react';

type locations = 'left' | 'right';

interface buttonProps {
    icon: string,
    iconLoc: locations,
    text: string,
    onClick: any
}

function FormButton(props:buttonProps) {
    if(props.iconLoc =='left') {
        return(
            <div className='form-button'>
                <img src={props.icon} alt="" />
                <h5>{props.text}</h5>
            </div>
        );
    } else {
        return(
            <div className='form-button'>
                <h5>{props.text}</h5>
                <img src={props.icon} alt="" />
            </div>
        );  
    }
}

export default FormButton;