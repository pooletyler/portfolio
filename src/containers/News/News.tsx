import React from 'react';
import entries from './data/entries';
import './News.scss';

const News = () => {
  const evaluatePotentialHTML = (potentialHTMLString: string) => {
    return { __html: potentialHTMLString };
  };

  return (
    <div className="Introduction" data-test-name="News">
      <br />
      <div className="Main__section">INTRODUCTION</div>
      <br />
      <div className="Main__divider" />
      <br />
      {(entries.length > 0 &&
        entries.map((entry: any) => (
          <React.Fragment key={entry.id}>
            <div
              className="Main__subSection"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={evaluatePotentialHTML(entry.title)}
            />
            <br />
            <div
              className="Main__paragraph"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={evaluatePotentialHTML(entry.content)}
            />
            <br />
            <br />
          </React.Fragment>
        ))) ||
        undefined}
    </div>
  );
};

export default News;
