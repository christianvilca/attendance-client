import React from 'react';

const SpinnerCircle = (props) => {
	let classes = "slice " + props.classes
  return (
    <div className={classes}>
      <div data-loader="circle"></div>
    </div>
  );
}

export default SpinnerCircle;
