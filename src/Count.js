import React from 'react';
import reactDom from 'react-dom';

const Count = props => {
    let styles;

    if (props.counter===0){
        styles={
            color : 'red'
        }
    }
    
    else if(props.counter>=1 && props.counter<=10){
        styles={
            color : 'orange'
        }
    }

    else if(props.counter>=11 && props.counter<=50){
        styles={
            color : 'green'
        }
    }
    return(
        <div>
            <h1 style={styles}>{props.counter}</h1>
        </div>
    )
}

export default Count;