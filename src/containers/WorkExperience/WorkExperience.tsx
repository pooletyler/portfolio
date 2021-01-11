import React from 'react';
import entries from './data/entries';
import './WorkExperience.scss';

const WorkExperience = () => {
  return (
    <div className="WorkExperience">
      <br />
      <div className="Main__section">WORK EXPERIENCE</div>
      <br />
      <div className="Main__divider" />
      <br />
      {(entries.length > 0 &&
        entries
          .slice(0)
          .reverse()
          .map((entry: any) => (
            <React.Fragment key={entry.id}>
              <div className="Main__subSection">
                {`${entry.position},`}
                <span className="Main__highlight">{entry.organization}</span>
              </div>
              <br />
              <ul className="Main__paragraph">
                {entry.duties.map((duty: string) => (
                  <React.Fragment key={`${entry.id}duty`}>
                    <li>{duty}</li>
                    <br />
                  </React.Fragment>
                ))}
              </ul>
              <br />
              <br />
            </React.Fragment>
          ))) ||
        undefined}
    </div>
  );
};

export default WorkExperience;
