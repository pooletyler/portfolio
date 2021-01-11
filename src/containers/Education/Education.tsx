import React from 'react';
import entries from './data/entries';
import './Education.scss';

const Education = () => {
  return (
    <div className="Education">
      <br />
      <div className="Main__section">EDUCATION</div>
      <br />
      <div className="Main__divider" />
      <br />
      {(entries.length > 0 &&
        entries.map((entry: any) => (
          <React.Fragment key={entry.id}>
            <div className="Main__subSection">
              {entry.degree}
              <span className="Main__highlight">
                {`• ${entry.date} • ${entry.school}`}
              </span>
            </div>
            <br />
            <br />
          </React.Fragment>
        ))) ||
        undefined}
    </div>
  );
};

export default Education;
