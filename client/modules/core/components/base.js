import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Base extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueSingle: '3',
        };
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    handleChangeSingle(event, value) {
        this.setState({
            valueSingle: value,
        });
    };

    handleOnRequestChange(value) {
        this.setState({
            openMenu: value,
        });
    }

    handleOpenMenu() {
        this.setState({
            openMenu: true,
        });
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
                            onChange={this.handleChangeSingle}
                            value={this.state.valueSingle}
                        >
                            <MenuItem value="1" primaryText="Refresh" />
                            <MenuItem value="2" primaryText="Send feedback" />
                            <MenuItem value="3" primaryText="Settings" />
                            <MenuItem value="4" primaryText="Help" />
                            <MenuItem value="5" primaryText="Sign out" />
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