import React from 'react';

import { Breadcrumb } from 'antd';
import { DatePicker } from 'antd';

class Base extends React.Component {

    render() {

        const onChange = (value, dateString) => {
            console.log(value, dateString);
        };

        return (
            <div>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
                <DatePicker onChange={onChange} />
                </div>
        );
    }

}

export default Base;