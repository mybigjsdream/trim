import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout';
import Base from './containers/base';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);

    FlowRouter.route('/', {
        name: 'core',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Base />),
            });
        }
    });

}
