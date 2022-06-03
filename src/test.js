import React from 'react';

const test = () => {
    const isMember=false;
    const price=isMember?'$2.00':'$10.00';
    console.log(price);
    return (
       <div>
           <h1 style={{textAlign:'center'}}>This is Test</h1>
       </div> 
    );
};

export default test;