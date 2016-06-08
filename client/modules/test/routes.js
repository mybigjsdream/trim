import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout';
import Test from './containers/test';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'test',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Test />)
      });
    }
  });

}
