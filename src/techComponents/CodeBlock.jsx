// CodeBlock.js (Child Component)
import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock({ code, language }) {
  const [copySuccess, setCopySuccess] = useState('');

  // Function to handle the copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess('Code copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    }).catch(() => {
      setCopySuccess('Failed to copy!');
    });
  };

  return (
    <div className='code-block'>
      <SyntaxHighlighter language={language}>
        {code}
      </SyntaxHighlighter>
      <div className='code-block-btn'>
        <button onClick={copyToClipboard} className='btn btn-sm bg-yellow tx-white'>
            Copy
        </button>
        {copySuccess && <p>{copySuccess}</p>}
      </div>
    </div>
  );
}

export default CodeBlock;
