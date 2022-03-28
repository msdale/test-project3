import React from 'react';

const NoMatch = () => {
  return (
    <div className='section is-medium'>
      <div className='columns is-vcentered is-multiline'>
        <div className='column is-full'>
          <div className='title is-1'>Sorry, that page doesn't exist!</div>
        </div>
        <br/>
        <div className='column is-full'>
          <div className='title is-3'><a href="/" className='is-underlined has-text-link'>Return to Home!</a></div>
          </div>
      </div>
    </div>
  );
};

export default NoMatch;