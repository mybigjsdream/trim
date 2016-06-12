import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout';
import Test from './containers/test';
import Footer from './containers/footer';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/test', {
    name: 'test',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Test />),
        footer: () => (<Footer />)
      });
    }
  });

}
