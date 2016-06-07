import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin = require('react-tap-event-plugin');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//import jquery from 'jquery'
document = require('jquery');

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <MyAwesomeReactComponent />
    </MuiThemeProvider>
);

Meteor.startup(function() {
    injectTapEventPlugin();
    console.log('??');
    ReactDOM.render(
        <App />,
        document.body
    );
});