import React from 'react';
import './progress.component.scss';
import '../../../styles/_global.scss';

const ProgressComponent = () => {
  return (
    <svg className="loader" viewBox="0 0 24 24">
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
      <circle className="loader__value" cx="12" cy="12" r="10" />
    </svg>
  );
};

export default ProgressComponent;