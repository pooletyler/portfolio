import { motion } from 'framer-motion';
import React from 'react';
import * as icons from 'react-icons/fa';
import './Menu.scss';

interface Props {
  config: any;
  page: string;
}

const Menu = (props: Props) => {
  const { config, page } = props;

  const linksContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const link = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
    <motion.div className="Menu">
      <div className="Menu__titleContainer">
        <div className="Menu__circleContainer">
          <div className="Menu__title">T</div>
          <div className="Menu__subTitle">P</div>
        </div>
      </div>
      <motion.div
        className="Menu__contentContainer"
        variants={linksContainer}
        initial="hidden"
        animate="visible"
      >
        {config.sections.map((section: any) => {
          const [highlightedSection, highlightedSub] = page.split('-');

          return (
            <motion.a
              href={section.link || undefined}
              className={`Menu__section${
                (highlightedSection === section.name && ' Menu__highlighted') ||
                ''
              }`}
              key={section.name}
              variants={link}
              whileHover={{ scale: (section.sub.length === 0 && 1.05) || 1 }}
              whileTap={{
                scale: (section.sub.length === 0 && 0.8) || 1,
              }}
            >
              {section.name.toUpperCase()}
              {section.sub.map((sub: any) => {
                return (
                  <motion.a
                    href={sub.link}
                    className={`Menu__subSection${
                      (highlightedSub === sub.name && ' Menu__highlighted') ||
                      ''
                    }`}
                    key={sub.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 1,
                    }}
                  >
                    {sub.name.toUpperCase()}
                  </motion.a>
                );
              })}
            </motion.a>
          );
        })}
      </motion.div>
      <motion.div
        className="Menu__linksContainer"
        variants={linksContainer}
        initial="hidden"
        animate="visible"
      >
        {config.footer.map((icon: any) => {
          return (
            <motion.a
              href={icon.link}
              className="Menu__linkIcon"
              key={icon.icon}
              variants={link}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            >
              {findIconIfAvailable(icon.icon, icon.size)}
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Menu;
