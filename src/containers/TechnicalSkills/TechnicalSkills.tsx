import React from 'react';
import * as icons from 'react-icons/fa';
import entries from './data/entries';
import Bubble from '../../components/Bubble/Bubble';
import './TechnicalSkills.scss';

const TechnicalSkills = () => {
  // eslint-disable-next-line no-undef
  const hasKey = <O extends {}>(obj: O, key: keyof any): key is keyof O => {
    return key in obj;
  };

  const findIconIfAvailable = (entry: any) => {
    const iconString = entry.icon;

    if (iconString && hasKey(icons, iconString)) {
      const icon = icons[iconString];

      return icon({ size: '5rem' });
    }

    return entry.name;
  };

  return (
    <div className="TechnicalSkills">
      <br />
      <div className="Main__section">TECHNICAL SKILLS</div>
      <br />
      <div className="Main__divider" />
      <div className="TechnicalSkills__bubbleContainer">
        {(entries.length > 0 &&
          entries.map((entry: any) => (
            <Bubble
              size={entry.proficiency}
              text={findIconIfAvailable(entry)}
              key={entry.id}
            />
          ))) ||
          undefined}
      </div>
    </div>
  );
};

export default TechnicalSkills;
