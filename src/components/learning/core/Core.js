import React, { useEffect, useState, useRef } from 'react';
import CodeBlock from '../../../techComponents/CodeBlock';


const Core = () => {


    const [copySuccess, setCopySuccess] = useState('');

    const code = 
    `
    const element = <h1>Hello, world!</h1>;
    `;


    return (
        <div className='main-content-wrapper'>
            <div className="jsx">
                <h5 className="tx-violet">What is JSX?</h5>
                <p className='tx-lightblack m-0'> JSX stands for JavaScript XML </p>
                <p className='tx-lightblack m-0'> JSX allows us to write HTML in React</p>

                <CodeBlock code={code} language="javascript" />
            </div>
        </div>
    )
}

export default Core;