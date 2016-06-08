import React from 'react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class Test extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        //const {post} = this.props;
        return (
            <div>
                <AppBar title="Title"/>
            </div>
        );
    }

}

Test.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Test;