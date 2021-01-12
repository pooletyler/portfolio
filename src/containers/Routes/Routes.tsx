import React, { FC, useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Example from '../../components/Example/Example';
import openBase64EncodedStringAsPDF from '../../utilities/openBase64EncodedStringAsPDF';
import history from './history';
import { ReactComponent as CloseIcon } from '../../ui/close.svg';
import { ReactComponent as MenuIcon } from '../../ui/menu.svg';
import Education from '../Education/Education';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar';
import News from '../News/News';
import TechnicalSkills from '../TechnicalSkills/TechnicalSkills';
import WorkExperience from '../WorkExperience/WorkExperience';
import menuConfig from './data/menuConfig';
import resume from './data/resume';
import './Routes.scss';

const Routes: FC<any> = () => {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 850);
  const [page, setPage] = useState('Introduction');

  const menuControls = useAnimation();

  useEffect(() => {
    if (window.innerWidth <= 850) {
      setShowMenu(false);
    }
  }, [page]);

  useEffect(() => {
    if (showMenu) {
      menuControls.start({
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
        },
      });
    } else {
      menuControls.start({
        x: '-100%',
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
        },
      });
    }
  }, [showMenu]);

  const handleOnCloseClick = () => {
    setShowMenu(false);
  };

  const handleOnMenuClick = () => {
    setShowMenu(true);
  };

  const sendResume = () => {
    openBase64EncodedStringAsPDF(
      resume.content,
      'Tyler Poole - Front End Engineer'
    );

    return null;
  };

  return (
    <div className="Routes-container">
      <HashRouter history={history}>
        <div className="Main" data-test-name="Main">
          <motion.div className="Main__menuContainer" animate={menuControls}>
            <Menu config={menuConfig} page={page} />
          </motion.div>
          <div className="Main__blockContainer">
            <div className="Main__loadingNavbarContainer">
              <Navbar />
              <div className="Main__menuIcon">
                {(showMenu && (
                  <CloseIcon onClick={handleOnCloseClick} fill="#eff0eb" />
                )) || <MenuIcon onClick={handleOnMenuClick} fill="#eff0eb" />}
              </div>
            </div>
            <div className="Main__contentContainer">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => {
                    setPage('Introduction');
                    return <News />;
                  }}
                />
                <Route
                  exact
                  path="/education"
                  component={() => {
                    setPage('Education');
                    return <Education />;
                  }}
                />
                <Route
                  exact
                  path="/skills"
                  component={() => {
                    setPage('Technical Skills');
                    return <TechnicalSkills />;
                  }}
                />
                <Route
                  exact
                  path="/experience"
                  component={() => {
                    setPage('Work Experience');
                    return <WorkExperience />;
                  }}
                />
                <Route exact path="/resume" component={sendResume} />
                <Route
                  exact
                  path="/example"
                  component={(props) => {
                    const params = new URLSearchParams(props.location.search);
                    const title = params.get('title');
                    const src = params.get('src');

                    setPage(`Examples-${title}`);

                    return (
                      (title && src && <Example title={title} src={src} />) || (
                        <News />
                      )
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default Routes;
