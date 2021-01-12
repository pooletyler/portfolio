import React, { FC, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
  const [showMenu, setShowMenu] = useState(false);

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
          <div
            className={
              showMenu ? 'Main__menuShownMobile' : 'Main__menuContainer'
            }
          >
            <Menu config={menuConfig} />
          </div>
          <div
            className={
              showMenu ? 'Main__contentHiddenMobile' : 'Main__blockContainer'
            }
          >
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
                <Route exact path="/" component={News} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/skills" component={TechnicalSkills} />
                <Route exact path="/experience" component={WorkExperience} />
                <Route exact path="/resume" component={sendResume} />
                <Route
                  exact
                  path="/example"
                  component={(props) => {
                    const params = new URLSearchParams(props.location.search);
                    const title = params.get('title');
                    const src = params.get('src');

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
