var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Register = require('../components/login-register/Register');
var Login = require("../components/login-register/Login");
var Logout = require('../components/login-register/Logout');
var Dashboard = require('../components/secure/Dashboard');
var CreateWorkshop = require('../components/secure/CreateWorkshop');
var Workshop = require('../components/secure/Workshop');
var Profile = require('../components/secure/Profile');

var Home = require("../components/Home");
var requireAuth = require('../utils/authenticated')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="profile" component={Profile} onEnter={requireAuth} />
    </Route>
  </Router>
);

module.exports = routes;

//<Route path="create-workshop" component={CreateWorkshop} onEnter={requireAuth} />
//<Route path="workshop/:id" component={Workshop} onEnter={requireAuth} />