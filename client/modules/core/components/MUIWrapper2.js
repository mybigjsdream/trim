import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class WrapperIconButton extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <IconButton />   //<MoreVertIcon /></IconButton>
        );
    }

}

WrapperIconButton.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default WrapperIconButton;