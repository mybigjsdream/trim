import React from 'react';

import AppBar from 'material-ui/AppBar';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Base extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <div>
                <div>deng</div>
                <AppBar title="Title"/>
            </div>
        );
    }

}

Base.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Base;