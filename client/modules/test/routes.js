import React from 'react';
import {mount} from 'react-mounter';

import TestLayout from './components/layout';
import Test from './containers/test';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(TestLayout);

  FlowRouter.route('/', {
    name: 'test',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Test />)
      });
    }
  });

}
