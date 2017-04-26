import React from 'react';
import { render } from 'react-dom';
import EnPages from './components/English/EnPages';
import LandingEN from './components/English/LandingEN';
import ScheduleEN from './components/English/ScheduleEN';
import SpeakersEN from './components/English/SpeakersEN';
import AboutEN from './components/English/about';
import StaffEN from './components/English/StaffEN';
import OTDSummitEN from './components/English/OTDSummitEN';
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} render={applyRouterMiddleware(useScroll())} >
        <Route path="/" component={EnPages}>
          <IndexRoute component={LandingEN} />
          <Route path="/staff" component={StaffEN} />
          <Route path="/about" component={AboutEN} />
          <Route path="/schedule" component={ScheduleEN} />
          <Route path="/speakers" component={SpeakersEN} />
          <Route path="/otd" component={OTDSummitEN} />
        </Route>
        <Route path="/en" component={EnPages}>
        	<IndexRoute component={LandingEN} />
          <Route path="/en/about" component={AboutEN} />
          <Route path="/en/staff" component={StaffEN} />
          <Route path="/en/schedule" component={ScheduleEN} />
          <Route path="/en/speakers" component={SpeakersEN} />
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
