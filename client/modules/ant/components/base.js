import React from 'react';
import { Breadcrumb, Icon } from 'antd';


class Base extends React.Component {

    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <Icon type="user" />
                    应用列表
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    应用
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }

}

export default Base;