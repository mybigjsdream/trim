import React from 'react';
import {mount} from 'react-mounter';
import 'antd/dist/antd.css';


import Layout from './components/layout';
import Base from './containers/base';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);

    FlowRouter.route('/antd', {
        name: 'antd',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Base />),
            });
        }
    });

}
