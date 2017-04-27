import React from 'react';
import { render } from 'react-dom';
import Frame from './components/Frame';
import Landing from './components/Landing';
import About from './components/About';
import Schedule from './components/Schedule';
import Speaker from './components/Speaker';
import Contact from './components/Contact';
import OTDProgram from './components/OTDProgram';
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const components = Object.freeze({
  frame: Frame,
  landing: Landing,
  topPages: [
    {path: "about",    component: About},
    {path: "schedule", component: Schedule},
    {path: "speaker",  component: Speaker},
    {path: "contact",  component: Contact},
    {path: "otd",      component: OTDProgram},
  ]
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function routeSet (addPrefix, lang) {
  const wrapper = (Component) => (props) =>
    <Component {...props} addPrefix={addPrefix} lang={lang}/>
  return(
    <Route path={addPrefix("")} component={wrapper(components.frame)}>
      <IndexRoute component={wrapper(components.landing)} />
      {components.topPages.map((page, index) =>
        <Route key={index} path={page.path} component={wrapper(page.component)} />
      )}
    </Route>);
}

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory} render={applyRouterMiddleware(useScroll())} >
          {routeSet (((path)=>"/".concat(path)), null)}
          {routeSet (((path)=>path===""?"/en":"/en/".concat(path)), "en")}
          {routeSet (((path)=>path===""?"/zh":"/zh/".concat(path)), "zh")}
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
