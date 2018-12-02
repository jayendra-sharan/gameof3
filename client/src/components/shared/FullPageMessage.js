import React from 'react';

const FullPageMessage = ({ transparent, 
                          message,
                          isHtml,
                          actionBtn,
                          btnLabel,
                          onBtnClick }) => {
  return (
    <div className={`full-page-message ${transparent ? 'is-page-transparent' : ''}`}>
      {
        isHtml ? null :
        <div className='message-text'>
          { message }
        </div>
      }
      {
        actionBtn &&
        <button
          className='btn-primary'
          onClick={ e => {
            e.preventDefault ();
            onBtnClick ();
          }}> { btnLabel } </button>
      }

    </div>
  );
}

export default FullPageMessage;
