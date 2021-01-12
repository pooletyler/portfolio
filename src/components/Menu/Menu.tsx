import React from 'react';
import * as icons from 'react-icons/fa';
import './Menu.scss';

interface Props {
  config: any;
}

const Menu = (props: Props) => {
  const { config } = props;

  // eslint-disable-next-line no-undef
  const hasKey = <O extends {}>(obj: O, key: keyof any): key is keyof O => {
    return key in obj;
  };

  const findIconIfAvailable = (iconString: any, size: string) => {
    if (iconString && hasKey(icons, iconString)) {
      const icon = icons[iconString];
      return icon({ size });
    }

    return null;
  };

  return (
    <div className="Menu">
      <div className="Menu__titleContainer">
        <div className="Menu__circleContainer">
          <div className="Menu__title">T</div>
          <div className="Menu__subTitle">P</div>
        </div>
      </div>
      <div className="Menu__contentContainer">
        {config.sections.map((section: any) => {
          return (
            <a href={section.link || undefined} className="Menu__section">
              {section.name.toUpperCase()}
              {section.sub.map((sub: any) => {
                return (
                  <a href={sub.link} className="Menu__subSection">
                    {sub.name.toUpperCase()}
                  </a>
                );
              })}
            </a>
          );
        })}
      </div>
      <div className="Menu__linksContainer">
        {config.footer.map((icon: any) => {
          return (
            <a href={icon.link} className="Menu__linkIcon">
              {findIconIfAvailable(icon.icon, icon.size)}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
