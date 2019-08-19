import React from 'react';

const Result = props => 
{
    return ( 
        <div className="white-text">{String(props.error)}</div> 
    );
}
 
export default Result;