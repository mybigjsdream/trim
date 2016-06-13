import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Base extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        const style = {
            position: "fixed",
            top: 0,
            left: 0,
        };
        return (
            <div>
                <AppBar
                    title="应用"
                    style={style}
                    iconElementRight={
                      <IconMenu
                          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                          targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      >
                          <MenuItem primaryText="Refresh" />
                          <MenuItem primaryText="Help" />
                          <MenuItem primaryText="Sign out" />
                      </IconMenu>
                    }
                />
            </div>
        );
    }

}

Base.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Base;