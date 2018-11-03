import React from 'react';
import './ProgressBar.css';

export default props => {
  return (
    <div className="progressBar">
      <div
        className="progressBar__inner"
        style={{ width: props.progress + '%' }}
      />
    </div>
  );
};
